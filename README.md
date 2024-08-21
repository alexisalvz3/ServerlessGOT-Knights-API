# ServerlessGOT-Knights-API

A serverless API built with AWS SAM, Lambda, and API Gateway to provide information about knights from Game of Thrones.

## Project Description

This API allows users to retrieve information about famous knights from the Game of Thrones universe. It uses serverless architecture to provide scalable and cost-effective access to knight data.

## Features

- Get a list of all knights
- Get knights by allegiance
- Get a knight's personality (AI-generated)

## Technologies Used

- AWS SAM
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Python 3.12

## Project Structure

- `template.yaml`: SAM template file defining AWS resources
- `got_knights/app.py`: Main Lambda function code
- `events/`: Contains JSON files for testing Lambda functions locally
- `tests/`: (To be added) Unit tests for the application

## Setup and Deployment

(Instructions to be added)

### Prerequisites

- AWS CLI installed and configured
- AWS SAM CLI installed
- Docker installed (for local testing)
- Python 3.12

### Local Development

1. Clone the repository: git clone https://github.com/your-username/ServerlessGOT-Knights-API.git
cd ServerlessGOT-Knights-API

2. Install dependencies: pip install -r requirements.txt

3. Run the function locally: sam local invoke GetKnightsFunction -e events/get_knights_by_allegiance.json


### Deployment

(To be added once deployment steps are finalized)

## API Endpoints

- GET /knights: Retrieve all knights
- GET /knights?allegiance={house}: Retrieve knights by allegiance

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
