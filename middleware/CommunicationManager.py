import smbus
import time
from API_Manager import API_Manager
from gpiozero import Button

I2CBUS = 1
ADDRESS = 0x8
COMM_READY_PIN = 17

BTN_UP_STATE = 2
BTN_DOWN_STATE = 1

REQUEST_UP = "up"
REQUEST_DOWN = "down"

class CommunicationManager(object):

    

    def __init__(self) -> None:
        self.bus = smbus.SMBus(I2CBUS)
        self.address = ADDRESS
        self.communicationReady = Button(COMM_READY_PIN)
        self.isCommunicationRunning = True

        self.data = None    #data via I2C
        self.dataLastState = 0
        self.request = None
        self.apiManager = API_Manager()
        

    def run(self):
        while(self.isCommunicationRunning):
            try:
                self.data = self.bus.read_byte(self.address)
                self.bus.write_byte(self.address, self.data)
                
                while(self.communicationReady.is_pressed and self.isCommunicationRunning):
                    time.sleep(0.1)
                    self.data = self.bus.read_byte(self.address)
                    self.bus.write_byte(self.address, self.data)
                    print("communication is not working correctly")
            except:
                print("error communication")
            request = self.decodeRequest(self.data)
            if  request != None:
                self.apiManager.sendRequest(request)
            time.sleep(0.1)
            

    def decodeRequest(self, data) -> str:
        toReturn = None
        if((data & BTN_UP_STATE) and not self.dataLastState & BTN_UP_STATE):
            toReturn = REQUEST_UP
        if((data & BTN_DOWN_STATE) and not self.dataLastState & BTN_DOWN_STATE):
            toReturn = REQUEST_DOWN
        self.dataLastState = data
        return toReturn
    

if __name__ == "__main__":
    cman = CommunicationManager()

    cman.run()