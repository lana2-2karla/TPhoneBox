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

  def test_first_button_header_displayed(self):

    # Verificação do primeiro botão no Header
    first_button = self.driver.find_element('xpath', '//*[@id="app"]/header/div/div/div[2]/button[1]')
    self.assertTrue(first_button.is_displayed())

  def test_second_button_header_displayed(self):

    second_button = self.driver.find_element('xpath', '//*[@id="app"]/header/div/div/div[2]/button[2]')
    self.assertTrue(second_button.is_displayed())

  def test_first_card(self):

    first_card = self.driver.find_element('xpath', '//*[@id="app"]/main/div/div[1]')
    self.assertTrue(first_card.is_displayed())


  def tearDown(self):
    # Fechamento do navegador
    self.driver.quit()

if __name__ == '__main__':
  unittest.main()


