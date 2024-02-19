# Middleware
This is Python project.
Reads data from I2C bus and, process them, it creates requests for server using files located in folder tmp

## Getting started

Check wheather Python is installed:

```bash
sudo apt install python3

#verify installation

python3 --version

```

Install smbus library for I2C communication:

```bash
sudo apt install python3-smbus

```

Enable I2C on Raspberry:
```bash
sudo raspi-config
```

In the Raspberry Pi Software Configuration Tool, navigate to ‘Interfacing Options’. 
In the pop-up window, enable the Arm I2C interface and select ‘Yes’.

Reboot Raspberry:

```bash
sudo reboot
```

Connect SDA to pin GPIO2 and SCL to pin GPIO3, the check wire connect to GPIO17.

Run this project:

```bash
python3 CommunicationManager.py
```

## Learn more

To learn more about I2C on Raspberry follow theese resources:

- [I2C protocol tutorial](https://www.engineersgarage.com/articles-raspberry-pi-i2c-bus-pins-smbus-smbus2-python/)
- [I2C on Wikipedia](https://en.wikipedia.org/wiki/I%C2%B2C)



