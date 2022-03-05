from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import requests

def get_url(item):
    listz = item.split(" ")
    url = "https://www.amazon.com/s?k=" 
    for element in listz:
        url += str(element) + "+" 
    return url[:-1]

def check_float(string):
    try:
        float(string)
        return True
    except ValueError:
        return False


def is_free(string):
    return string[:4] == "FREE"


def get_prices(url):
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(url)
    action = ActionChains(driver)

    og_price_info = driver.find_element_by_xpath('//*[@id="apex_offerDisplay_desktop"]').text
    price_split = og_price_info.split("\n")
    price_wo_tax = float(price_split[0][1:] + "." + price_split[1])

    delivery_info = driver.find_element_by_xpath('//*[@id="mir-layout-DELIVERY_BLOCK"]').text
    cheapest_info = delivery_info.split("\n")[0]

    if not is_free(cheapest_info):
        price_wo_tax += float(cheapest_info[1:5])
    
    driver.close()

    return price_wo_tax


def get_each_state_tax(url):
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(url)
    action = ActionChains(driver)

    state_tax_dic = {}

    for k in range(1,54):
        state = driver.find_element_by_xpath('//*[@id="interior"]/div\
        /div/table/tbody/tr[' + str(k) + ']').text
        replaced_str = state.replace("\n", " ")
        state_info = replaced_str.split(" ")

        try:
            state_name = state_info[0]
            for k in range(1, len(state_info)):
                temp = str(state_info[k][:-1])
                if not check_float(temp):
                    state_name += " " + state_info[k]
                else:
                    state_tax_dic[state_name] = temp
                    break
                    
        except IndexError as e:
            continue
    
    return state_tax_dic

def get_est_final_price(og_price, dic, state):
    return og_price * (1.0 + float(dic[state]) * 0.01)


def main():
    url = "https://www.amazon.com/Pluffins-Teddy-Bear-Plush-Stuffed/dp/B07HVM\
949Q/ref=sr_1_1_sspa?crid=30JURJD153SX9&keywords=teddy%2Bbear&qid=1646457647&\
sprefix=teddy%2Bbe%2Caps%2C113&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFV\
WkhDNlBJT05HNjQmZW5jcnlwdGVkSWQ9QTA2ODI5ODNZSzJCWU1FWUUyMDAmZW5jcnlwdGVkQWRJ\
ZD1BMDI0MDAxMjJHVVZKWU0wVkpOS1Mmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUm\
VkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1"

    """
    url = "https://www.amazon.com/ManRiver-Rotation-Chain-Promise-Rings/dp/B09J\
GK961Y/ref=sr_1_3?crid=LRVYV0X39AHB&keywords=cheap&qid=1646466509&sprefix=cheap%2C\
aps%2C215&sr=8-3&th=1"
    """
    
    price_wo_tax = get_prices(url)
    tax_url = "https://www.salestaxinstitute.com/resources/rates"
    state_tax_dic = get_each_state_tax(tax_url)
    state = "California"
    print(get_est_final_price(price_wo_tax, state_tax_dic, state)) 


if __name__ == "__main__":
    main()
