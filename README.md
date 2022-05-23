# SDK_Assignment
# To run the node container
sudo docker run --name new_cont -p 3500:3500 -e AWS_ACCESS_KEY_ID=##### -e AWS_SECRET_ACCESS_KEY=#### -e AWS_DEFAULT_REGION=#### innoakshi/assignment_sdk:1.0

# To run the react container
sudo docker run --name react_container -p 3000:3000 innoakshi/react_sdk:1.0
