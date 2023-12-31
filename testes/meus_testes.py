import unittest
import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

servico = Service(ChromeDriverManager().install())

class PythonTPhoneBoxSearch(unittest.TestCase):

  def setUp(self):
    navegador = webdriver.Chrome(service=servico)
    self.driver = navegador
    self.driver.maximize_window()
    self.driver.get('http://localhost:5173')

  def test_search_all_header_elements(self):

    # verificação da logo
    logo = self.driver.find_element('xpath', '//*[@id="app"]/header/div/div/div[1]/img')
    self.assertTrue(logo.is_displayed())
    # verificação do primeiro botão no Header
    first_button = self.driver.find_element('xpath', '//*[@id="app"]/header/div/div/div[2]/button[1]')
    self.assertTrue(first_button.is_displayed())
    # verificação do segundo botão
    second_button = self.driver.find_element('xpath', '//*[@id="app"]/header/div/div/div[2]/button[2]')
    self.assertTrue(second_button.is_displayed())


  def test_search_for_random_cards(self):

    first_card = self.driver.find_element('xpath', '//*[@id="app"]/main/div/div[1]')
    self.assertTrue(first_card.is_displayed())

    random_card = self.driver.find_element('xpath', '//*[@id="app"]/main/div/div[5]')
    self.assertTrue(random_card.is_displayed())

    last_card = self.driver.find_element('xpath', '//*[@id="app"]/main/div/div[7]')
    self.assertTrue(last_card.is_displayed())

  
  def test_search_elements_by_cards(self):

    time.sleep(3)

    expected_title = "iPhone 13"
    actual_title = self.driver.find_element('xpath', '//*[@id="app"]/main/div/div[1]/div[1]/h2').text
    self.assertEqual(actual_title, expected_title)

    expected_url = "https://yacare-products-image.s3.sa-east-1.amazonaws.com/iphone/4x/iPhone+13.png"
    actual_url = self.driver.find_element('xpath', '//*[@id="app"]/main/div/div[1]/div[2]/img').get_attribute('src')
    self.assertEqual(actual_url, expected_url, "Image URL is different")

    expected_price = "R$ 2548,00"
    actual_price = self.driver.find_element('xpath', '//*[@id="app"]/main/div/div[1]/div[2]/p[2]').text
    self.assertEqual(actual_price, expected_price, "price is different")
 
    button = self.driver.find_element('xpath', '//*[@id="app"]/main/div/div[1]/div[2]/button')
    text_button = self.driver.find_element('xpath', '//*[@id="app"]/main/div/div[1]/div[2]/button').text
    self.assertTrue(button.is_displayed())
    self.assertEqual(text_button, 'Quero Assinar', "text is different")

  
  def test_take_screenshot(self):

    # Tirar print da tela ---->> Muito interessante!!!
    self.driver.save_screenshot('screenshot.png')


  def tearDown(self):
    # Fechamento do navegador
    self.driver.quit()

if __name__ == '__main__':
  unittest.main()


