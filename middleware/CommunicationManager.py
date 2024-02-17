import smbus
import time

I2CBUS = 1
ADDRESS = 0x8

class CommunicationManager(object):

    

    def __init__(self) -> None:
        self.bus = smbus.SMBus(I2CBUS)
        self.address = ADDRESS
        self.isCommunicationRunning = True
        self.data = None

    def run(self):
        while(self.isCommunicationRunning):
            self.data = self.bus.read_byte(self.address)
            self.bus.write_byte(self.address, self.data)
            time.sleep(0.01)


            pass

if __name__ == "__main__":
    cman = CommunicationManager()

    cman.run()