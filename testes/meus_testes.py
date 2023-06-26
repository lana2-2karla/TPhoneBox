import unittest
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service


servico = Service(ChromeDriverManager().install())
navegador = webdriver.Chrome(service=servico)

class PythonTPhoneBoxSearch(unittest.TestCase):

    def setUp(self):
        self.driver = navegador

    def test_search_button_header_displayed(self):
        # Navegação para o site
        self.driver.get('http://localhost:5173')

        # Verificação do primeiro botão no Header
        search_first__button = self.driver.find_element('xpath', '//*[@id="app"]/header/div/div/div[2]/button[1]')
        self.assertTrue(search_first__button.is_displayed())

    def tearDown(self):
        # Fechamento do navegador
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()


