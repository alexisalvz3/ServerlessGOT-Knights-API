import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('GOTKnights')



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

     # Extract query parameters
    query_parameters = event.get('queryStringParameters', {})

    # Check if there's an allegiance query parameter
    allegiance = query_parameters.get('allegiance') if query_parameters else None

    # error handling done in try-except block
    try:
        if allegiance:
            # grabbing list of knights with allegiance to user-specified House from dynamoDB
            response = table.scan(
                FilterExpression=boto3.dynamodb.conditions.Attr('allegiance').eq(allegiance)
            )            # case where no knights found with allegiance to user-specified House
        else:
            response = table.scan()
        
        # placing correct response into knights array
        knights = response['Items']
        
        # case where we didnt find any knights with appropriate allegiance
        if not knights:
            return {
                "statusCode": 404,
                "body": json.dumps({"error": f"No knights found" + (f" with allegiance to {allegiance}" if allegiance else "")}), 
                "headers": {"Content-Type": "application/json"}
            }
        # case where we succesfully return list of knights with correct allegiance
        return {
            "statusCode": 200,
            "headers": {
                
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*", # Allow from anywhere 
                "Access-Control-Allow-Methods": "GET" # Allow only GET request 
            },
            "body": json.dumps(knights)
        }
        
    except Exception as e:
        # Log the error (in a real-world scenario, you'd use proper logging)
        print(f"Error: {str(e)}")
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "An error occurred while querying the database"}),
            "headers": {"Content-Type": "application/json"}
        }
