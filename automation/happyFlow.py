from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

# Create a new instance of the Chrome driver
driver = webdriver.Chrome()


# Open the project webpage
driver.get("http://127.0.0.1:5500/")
driver.maximize_window()
driver.implicitly_wait(20)

# Step 1: Enter the name as "jolly"
def happy_flow(name,profile_id,radio,department,salary, day, month, year):
    name_input = driver.find_element(By.ID, "name")
    name_input.send_keys(name)

    # Step 2: Select the first profile image
    profile_image = driver.find_element(By.ID, profile_id)
    profile_image.click()

    # Step 3: Select gender as female
    gender_female = driver.find_element(By.ID, radio)
    gender_female.click()

    # Step 4: Select any department
    department_checkbox = driver.find_element(By.ID, department)
    department_checkbox.click()

    # Step 5: Enter the salary
    salary_input = driver.find_element(By.ID, "salary")
    driver.execute_script("arguments[0].value = arguments[1];", salary_input, salary)

    # Step 6: Select start date as day, month, and year
    day_select = Select(driver.find_element(By.ID, "day"))
    day_select.select_by_value(day)

    month_select = Select(driver.find_element(By.ID, "month"))
    month_select.select_by_value(month)

    year_select = Select(driver.find_element(By.ID, "year"))
    year_select.select_by_value(year)

    # Step 7: Click the submit button
    time.sleep(1)
    submit_button = driver.find_element(By.ID, "submitButton")
    submit_button.click()
def add_button():
    driver.find_element(By.ID, "addButton").click()
def delete_button():
    delete_button = driver.find_element(By.CLASS_NAME, "fa-solid")
    driver.execute_script("window.scrollBy(0, 500);")
    time.sleep(0.4)
    delete_button.click()        
try:
    
    happy_flow("jolly","profile1","radio2","department1","50","10","May","2022")
    add_button()
    happy_flow("tom","profile2","radio1","department2","40","12","April","2020")
    add_button()
    happy_flow("jenny","profile3","radio2","department4","40","10","May","2021")
    add_button()
    happy_flow("peter","profile4","radio1","department3","30","9","December","2023")
    # Step 8: Click the delete button
    delete_button()
    delete_button()
    delete_button()
    delete_button()
    add_button()
    happy_flow("jolly","profile1","radio2","department1","50","10","May","2022")
    driver.refresh()
    # Close the browser
    time.sleep(5)
    driver.quit()
    print('Test case Passed')
except:
    print('Test case failed')
