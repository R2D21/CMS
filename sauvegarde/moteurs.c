
//Fonction qui set le moteur1
void SetMotor1(int speed, boolean reverse)
{
analogWrite(motor1_enablePin, speed);
digitalWrite(motor1_in1Pin, ! reverse);
digitalWrite(motor1_in2Pin, reverse);
}
//Fonction qui set le moteur2
void SetMotor2(int speed, boolean reverse)
{
	analogWrite(motor2_enablePin, speed);
	digitalWrite(motor2_in1Pin, ! reverse);
	digitalWrite(motor2_in2Pin, reverse);
}