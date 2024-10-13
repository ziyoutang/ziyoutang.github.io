#include <OneWire.h>
#include <DallasTemperature.h>

const int temperaturePin = 2;

const float releaseThreshold = 28.0;
const float suctionThreshold = 22.0;

const int waterReleasePin = 3;

const int waterSuctionPin = 4;

const int initialWaterLevel = 8;
const int releaseWaterLevel = 15;

OneWire oneWire(temperaturePin);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);

  pinMode(waterReleasePin, OUTPUT);
  pinMode(waterSuctionPin, OUTPUT);

  sensors.begin();
}

void loop() {
  sensors.requestTemperatures();

  float temperature = sensors.getTempCByIndex(0);

  Serial.print("Temperature: ");
  Serial.println(temperature);

  if (temperature > releaseThreshold) {
    digitalWrite(waterReleasePin, HIGH);
    digitalWrite(waterSuctionPin, LOW);
    Serial.println("Water released into the pool.");
  }

  else if (temperature < suctionThreshold) {
    digitalWrite(waterReleasePin, LOW);
    digitalWrite(waterSuctionPin, HIGH);
    Serial.println("Water sucked back into storage.");
  }
  else {
    digitalWrite(waterReleasePin, LOW);
    digitalWrite(waterSuctionPin, LOW);
  }

  delay(1000);
}