import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('GOTKnights')

def get_knights(event, context):
    print("Full event received:", json.dumps(event, indent=2))


     # Extract query parameters
    query_parameters = event.get('queryStringParameters', {})

    # Check if there's an allegiance query parameter
    name = query_parameters.get('name') if query_parameters else None
    allegiance = query_parameters.get('allegiance') if query_parameters else None
    print("Filtering for allegiance:", allegiance)


    # error handling done in try-except block
    try:
        if name:            
            response = table.get_item(Key={'name': name})           
            # placing correct response into knights array
            knights = [response['Item']] if 'Item' in response else []
        elif allegiance:
            response = table.scan(
                FilterExpression=boto3.dynamodb.conditions.Attr('allegiance').contains(allegiance)
            )
            # placing correct response into knights array
            knights = response['Items']
            print("All knights in DB: ", knights)
        else:
            response = table.scan()
            # placing correct response into knights array
            knights = response['Items']
        
        
        # case where we didnt find any knights with appropriate allegiance
        if not knights:
            return {
                "statusCode": 404,
                "body": json.dumps({"error": f"No knights found" + (f" with name {name}" if name else "") + (f" with allegiance to {allegiance}" if allegiance else "")}),                
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
