import smbus
import time
from API_Manager import API_Manager
from gpiozero import Button

I2CBUS = 1
ADDRESS = 0x8
COMM_READY_PIN = 17

class CommunicationManager(object):

    

    def __init__(self) -> None:
        self.bus = smbus.SMBus(I2CBUS)
        self.address = ADDRESS
        self.isCommunicationRunning = True
        self.data = None
        self.apiManager = API_Manager()
        self.communicationReady = Button(COMM_READY_PIN)

    def run(self):
        while(self.isCommunicationRunning):
            self.data = self.bus.read_byte(self.address)
            self.bus.write_byte(self.address, self.data)
            self.apiManager.sendRequest()
            time.sleep(0.01)
            print(self.data)
            print(self.communicationReady.is_pressed)


            pass

if __name__ == "__main__":
    cman = CommunicationManager()

    cman.run()