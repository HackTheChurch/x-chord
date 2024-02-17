import I2C_LCD_DRIVER
from time import *

mylcd = I2C_LCD_DRIVER.lcd()

mylcd.lcd_display_string("Hello World!", 1)


