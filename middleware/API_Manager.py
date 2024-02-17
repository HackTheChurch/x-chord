import json
from datetime import datetime


class API_Manager(object):  

    def __init__(self) -> None:
        self.cisloSloky = 0
        pass

    def sendRequest(self, request): #creates json file
        timestamp = datetime.now()
        dictionary = {
            "action":request,
            "timestamp":str(timestamp)
        }
        json_object = json.dumps(dictionary, indent=2)
        with open("../tmp/log/request_"+timestamp.strftime("%Y-%m-%d_%I-%M-%S_%f")+".json", "w") as outfile:
            outfile.write(json_object)
        with open("../tmp/sloka/cislosloky.txt", "w") as outfileCisloSloky:

            outfileCisloSloky.write(str(self.computeCisloSloky(request)))
        pass

    def computeCisloSloky(self, request):
        if(request == "down"):
            if (self.cisloSloky >0):
                self.cisloSloky -=1

        if(request == "up"):
                if (self.cisloSloky <6):
                    self.cisloSloky +=1
        return self.cisloSloky



if __name__ == "__main__":
    print(datetime.now())
    apmng = API_Manager()
    apmng.sendRequest("up")
    pass