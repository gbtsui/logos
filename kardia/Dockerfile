# no idea what i'm doing wooo
FROM gradle:latest AS builder
WORKDIR /app
COPY --chown=gradle:gradle . .
RUN "./gradlew"
#RUN gradle build
#RUN gradle build --no-daemon


FROM openjdk:latest
WORKDIR /app
COPY --from=builder /app/build/libs/app.jar app.jar
EXPOSE 8080
CMD ["./gradlew", "run"]