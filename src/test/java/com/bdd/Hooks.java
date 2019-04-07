package com.bdd;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

/**
 * Created by peraikumar on 15/10/2018.
 */
public class Hooks {
    DriverManager driverManager = new DriverManager();

    @Before
    public void setUP() throws IOException
    {
        driverManager.openBrowser();
    }

    @After
    public void tearDown ()
    {
        driverManager.closeBrowser();
    }
}



