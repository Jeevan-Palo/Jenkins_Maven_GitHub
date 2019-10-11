FROM openjdk:8u181
ADD target/com.palo.techtest-0.0.1-SNAPSHOT.jar /opt/com.palo.techtest-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/opt/com.palo.techtest-0.0.1-SNAPSHOT.jar"]