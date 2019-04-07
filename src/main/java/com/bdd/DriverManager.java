package com.bdd;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import jdk.internal.dynalink.beans.StaticClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

/**
 * Created by peraikumar on 15/10/2018.
 */
public class DriverManager {
    public static WebDriver driver;

    public void openBrowser() throws IOException
    {
        ChromeDriverManager.getInstance().setup();
        driver= new ChromeDriver();
        driver.get("https://www.cakesbakes.co.uk");
        driver.manage().window().maximize();
    }

    public void closeBrowser()
    {
        driver.quit();
    }
}
