package uk.co.dummy.testing.pageObject;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagePO {

    //Object locator
    @FindBy(linkText = "Create an Account")
    public static WebElement createAnAccountLink;

    //Initialised Elements
    public HomePagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    //Page specific Method

    public void clickCreateAnAccountLink(){createAnAccountLink.click();}

}
