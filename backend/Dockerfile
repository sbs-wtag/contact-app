FROM maven:3.8.1-openjdk-16-slim as build
WORKDIR /backend
COPY pom.xml .
COPY src src/
RUN mvn -ntp clean package -DskipTests

FROM openjdk:16-jdk-slim
COPY --from=build /backend/target/contact-*.jar contact.jar
ENTRYPOINT ["java", "-jar", "contact.jar"]