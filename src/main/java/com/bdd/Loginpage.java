package com.bdd;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static com.bdd.DriverManager.driver;

/**
 * Created by peraikumar on 14/10/2018.
 */
public class Loginpage extends DriverManager {

   // @FindBy(linkText = "LOG IN")
   // static WebElement loginButton;

   // public Loginpage(){
      //  PageFactory.initElements(driver, this);
   // }



    public void join()
    {
      driver.findElement(By.xpath("//span[contains(text(),'LOG IN')]")).click();

    }

}
