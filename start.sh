echo "Script Name: $1"
docker build . -t tsdocker
docker run tsdocker "$1"