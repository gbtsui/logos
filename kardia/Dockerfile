FROM gradle:latest AS builder 
WORKDIR /app
COPY --chown=gradle:gradle . .
RUN ./gradlew build --no-daemon


FROM eclipse-temurin:latest
WORKDIR /app
COPY --from=builder /app/app/build/libs/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
