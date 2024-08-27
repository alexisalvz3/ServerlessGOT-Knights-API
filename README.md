# ServerlessGOT-Knights-API

A serverless API built with AWS SAM, Lambda, and API Gateway to provide information about knights from Game of Thrones.

## Project Description

This API allows users to retrieve information about famous knights from the Game of Thrones universe. It leverages serverless architecture to provide scalable and cost-effective access to knight data.

## Features

- Get a list of all knights
- Filter knights by allegiance
- Error handling
- Serverless architecture for automatic scaling and cost optimization
- Frontend UI 
- Get a knight's personality (AI-generated) (Future feature)

## Technologies Used

- AWS Serverless Application Model (SAM)
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Docker
- Boto3 (AWS SDK for Python)
- Python 3.12
- React

## Project Structure

- `template.yaml`: SAM template file defining AWS resources
- `got_knights/app.py`: Main Lambda function code
- `events/`: Contains JSON files for testing Lambda functions locally
- `tests/`: (To be added) Unit tests for the application
- `scripts/populate_table.py`: Script to populate DynamoDB with initial data

## Setup and Deployment

### Prerequisites

- AWS CLI installed and configured
- AWS SAM CLI installed
- Docker installed (for local testing)
- Python 3.12

### Local Development

1. Clone the repository: git clone https://github.com/your-username/ServerlessGOT-Knights-API.git

2. cd ServerlessGOT-Knights-API

3. create virtual environment:
  - python3 -m venv venv
  - source venv/bin/activate 

4. Install dependencies: pip install -r requirements.txt

5. Populate the DynamoDB table with initial data: 
  - python scrypts/populate_table.py 

5. sam build 

6. Run the function locally: sam local invoke GetKnightsFunction -e events/get_knights_by_allegiance.json


### Deployment

- sam deploy --guided (for first time)
- Follow the prompts to configure the deployment.
- After successfully deploying, please take a look at the API Gateway endpoint URL from the output.
- For frontend interaction: npm run dev (click on http://localhost:5173)

## API Endpoints

- GET /knights: Retrieve all knights
- Query Parameters:
  - `allegiance` (optional): Filter knights by allegiance; ex:   

Example usage (on Postman):

Get all knights:
  - GET [https://717i9padz3.execute-api.us-west-1.amazonaws.com/Prod/knights](https://717i9padz3.execute-api.us-west-1.amazonaws.com/Prod/knights)

Get knights with allegiance to House Stark:
  - GET [https://717i9padz3.execute-api.us-west-1.amazonaws.com/Prod/knights?allegiance=House%20Stark](https://717i9padz3.execute-api.us-west-1.amazonaws.com/Prod/knights?allegiance=House%20Stark)
## Future Enhancements

  - Implement AI-generated personality description for each knight
  - Add authentication and authorization

## Contributing

Contributions to improve the project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License

## Contact

Alexis Alvarez - [alexis.alvz3@gmail.com](mailto:alexis.alvz3@gmail.com)

Project Link: [https://github.com/your-username/ServerlessGOT-Knights-API](https://github.com/your-username/ServerlessGOT-Knights-API)
