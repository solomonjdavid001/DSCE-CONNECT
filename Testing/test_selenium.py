from selenium import webdriver;
from selenium.webdriver.common.keys import Keys; 
import time
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.remote.webelement import WebElement
import unittest
import logging
from random import randint
from selenium.common.exceptions import NoSuchElementException

driver = webdriver.Chrome(executable_path="C:\selenium driver\chromedriver.exe")

driver.get("https://dsce-connect-ruddy.vercel.app/")
driver.maximize_window()
print(driver.title)
time.sleep(2)

#ABOUT PAGE
driver.find_element_by_xpath("//a[normalize-space()='ABOUT']").click()
print(driver.title)
time.sleep(2)
driver.back()
time.sleep(2)

#NOTICES PAGE
driver.find_element_by_xpath("//a[normalize-space()='NOTICES']").click()
print(driver.title)
time.sleep(2)
driver.find_element_by_id("TableInput").send_keys("FIN")
time.sleep(3)
driver.find_element_by_xpath("//*[@id='GbpecTable']/tr[2]/td[3]/a").click()
time.sleep(2)
p= driver.window_handles[0]
#obtain browser tab window
c = driver.window_handles[1]
#switch to tab browser
driver.switch_to.window(c)
print("Page title :")
print(driver.title)
#close browser tab window
driver.close()
#switch to parent window
driver.switch_to.window(p)
print("Current page title:")
print(driver.title)
driver.back()




