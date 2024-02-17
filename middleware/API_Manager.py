import json
from datetime import datetime


class API_Manager(object):

    def __init__(self) -> None:
        pass

    def sendRequest(self, request):
        timestamp = datetime.now()
        dictionary = {
            "action":request,
            "timestamp":str(timestamp)
        }
        json_object = json.dumps(dictionary, indent=2)
        with open("tmp/request_"+timestamp.strftime("%Y-%m-%d_%I-%M-%S_%f")+".json", "w") as outfile:
            outfile.write(json_object)
        pass

if __name__ == "__main__":
    print(datetime.now())
    apmng = API_Manager()
    apmng.sendRequest("down")
    pass