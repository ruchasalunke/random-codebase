@echo off
echo Showing all Docker images...
docker images

echo.
echo Showing all running containers...
docker ps

echo.
echo Pulling the OpenJDK image...
docker pull openjdk

echo.
echo Creating and running a container named "JAVA"...
docker run --name JAVA -it -d openjdk

echo.
echo Executing jshell in the "JAVA" container...
docker exec -it JAVA jshell

echo.
echo Exiting the jshell...
/exit

echo.
echo Stopping the container...
docker stop JAVA

echo.
echo Removing the container...
docker container rm JAVA

echo.
echo Removing unused images...
docker image prune -f

echo.
echo All commands have been executed.
pause