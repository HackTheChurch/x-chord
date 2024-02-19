#include <Wire.h> 
#define BUTTON_ARR_LEN  40 // number of samples on buttons (to get rid of debouncing effects)

byte TxByte = 0;   // byte sent to RPI, lowest 2 bits correspond to button states, rest is set to 0
byte RxByte = 0;   // byte received from RPI, in order for the communication to be considered OK, must be the same as last TxByte sent
 
byte buttonA[BUTTON_ARR_LEN] = {0}; //history of button states for debouncing
byte buttonB[BUTTON_ARR_LEN] = {0}; 
byte buttonInd = 0;                  
byte buttonA_pressed = 0;
byte buttonB_pressed = 0;

unsigned long previous_ok_communication_timestamp = 0; //to detect problems with communication, timestamp of last OK transmission
unsigned long communication_timeout= 200; // time in ms, after which LED on pedal is turned of to indicate that the device is not responding

void I2C_RxHandler(int numBytes) // if received confirmation byte, check if it is the same as the byte transmitted, if not, notify RPI by pulling down the PIN 13
{
  while(Wire.available()) {  // Read Any Received Data
    RxByte = Wire.read();
  }
  if(RxByte != TxByte){
      digitalWrite(13, LOW);
    }else{
      digitalWrite(13, HIGH);
      previous_ok_communication_timestamp = millis();
      }
}
 
void I2C_TxHandler(void)  //if data requested send information about buttons
{
  TxByte = 0x00;
  TxByte |= (digitalRead(2)&0x1);
  TxByte |= (digitalRead(3)&0x1)<<1;
  Wire.write(TxByte);
}
 
void setup() {
  pinMode(13, OUTPUT); //feedback to rpi in case there were communication errors
  pinMode(8, OUTPUT);  // LED to show device working
  pinMode(2, INPUT_PULLUP); //button
  pinMode(3, INPUT_PULLUP); // button
  Wire.begin(0x8); 
  previous_ok_communication_timestamp = millis();
  Wire.onReceive(I2C_RxHandler);
  Wire.onRequest(I2C_TxHandler);
}
 
void loop() {
  delay(5);
  buttonA[buttonInd] = digitalRead(2);
  buttonB[buttonInd] = digitalRead(3);
  buttonInd = (buttonInd+1)%BUTTON_ARR_LEN;
  byte buttonA_pressed_cnt = 0;
  byte buttonB_pressed_cnt = 0;
  for(byte i = 0; i< BUTTON_ARR_LEN; i++){
      buttonA_pressed_cnt+= buttonA[i];
      buttonB_pressed_cnt+= buttonB[i];
  }
  buttonA_pressed = (buttonA_pressed_cnt >BUTTON_ARR_LEN/2);
  buttonB_pressed = (buttonB_pressed_cnt >BUTTON_ARR_LEN/2);
  if(millis()-previous_ok_communication_timestamp<communication_timeout){
     digitalWrite(8, HIGH);
    }else{
      digitalWrite(8, LOW);
      }
}
