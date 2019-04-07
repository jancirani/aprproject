package com.bdd;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

/**
 * Created by peraikumar on 15/10/2018.
 */
public class Homepage extends DriverManager {

    public String verifyHomePage() {
        String actualText = driver.findElement(By.className("hed-nam")).getText();
        return actualText;


    }
    public void search(String cakes)
    {
        driver.findElement(By.id("q")).sendKeys("cakes");
        driver.findElement(By.className("btn btn-secondary")).click();
    }
}
