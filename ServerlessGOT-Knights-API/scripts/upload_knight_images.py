import boto3
import os
from botocore.exceptions import ClientError

def upload_knight_images():
    s3_client = boto3.client('s3')
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('GOTKnights')
    bucket = 'got-knights-images'

    # Dictionary mapping knight names to their image file names
    knight_images = {
        "Ser Arthur Dayne": "arthur_dayne.jpeg",
        "Ser Barristan Selmy": "barristan_selmy.jpeg",
        "Ser Jaime Lannister": "jaime_lannister.jpeg",
        "Ser Rodrik Cassel": "rodrik_cassel.jpeg"
    }

    for knight_name, image_file in knight_images.items():
        local_file_path = os.path.join("knight_images", image_file)
        
        if not os.path.exists(local_file_path):
            print(f"Image file not found: {local_file_path}")
            continue

        # Upload image to S3
        try:
            s3_client.upload_file(local_file_path, bucket, image_file)
            print(f"Uploaded {image_file} to S3")
        except ClientError as e:
            print(f"Error uploading {image_file} to S3: {e}")
            continue

        # Generate the S3 URL for the uploaded image
        image_url = f"https://{bucket}.s3.amazonaws.com/{image_file}"

        # Update DynamoDB with the S3 URL
        try:
            response = table.update_item(
                Key={'name': knight_name},
                UpdateExpression="set imageUrl=:u",
                ExpressionAttributeValues={':u': image_url},
                ReturnValues="UPDATED_NEW"
            )
            print(f"Updated {knight_name}'s image URL in DynamoDB: {image_url}")
        except ClientError as e:
            print(f"Error updating DynamoDB for {knight_name}: {e}")

if __name__ == "__main__":
    upload_knight_images()