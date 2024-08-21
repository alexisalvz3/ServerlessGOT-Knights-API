import json

# import requests


def get_knights(event, context):
    """Sample pure Lambda function

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """

    # try:
    #     ip = requests.get("http://checkip.amazonaws.com/")
    # except requests.RequestException as e:
    #     # Send some context about this error to Lambda Logs
    #     print(e)

    #     raise e


def get_knights(event, context):
    # Mock data for knights
    knights = [
        {
            "name": "Ser Arthur Dayne",
            "house": "Dayne",
            "title": "Sword of the Morning",
            "allegiance": "House Targaryen",
            "sword": "Dawn"
        },
        {
            "name": "Ser Barristan Selmy",
            "house": "Selmy",
            "title": "Barristan the Bold",
            "allegiance": "House Targaryen",
            "sword": "N/A"
        },
        {
            "name": "Ser Jaime Lannister",
            "house": "Lannister",
            "title": "Kingslayer",
            "allegiance": "House Lannister",
            "sword": "Oathkeeper"
        },
        {
            "name": "Ser Rodrik Cassel",
            "house": "Cassel",
            "title": "Master-at-Arms of Winterfell",
            "allegiance": "House Stark",
            "sword": "N/A"
        }
    ]
    
    print(f"Event: {event}")  # Add this line
    allegiance = event.get('queryStringParameters', {}).get('allegiance')

    print(f"Allegiance: {allegiance}")  # Add this line

    if allegiance:
        knights = [knight for knight in knights if knight['allegiance'] == allegiance]
    
    print(f"Filtered knights: {knights}")  # Add this line

    return {
        "statusCode": 200,
        "body": json.dumps(knights),
        "headers": {
            "Content-Type": "application/json"
        }
    }
