package com.example; // Or a more suitable package like com.example.config

import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.theme.Theme;

/**
 * This class configures the application's shell, including the theme and global CSS imports.
 * It's the central place for application-wide configurations that affect the HTML page itself.
 */
@Theme(value = "mytheme", variant = "light") // Lumo is the base, "point" is your conceptual overlay
@CssImport(value = "./styles/point-theme.css", themeFor = "vaadin-body-wrapper") // Global styles
@CssImport(value = "./styles/point-theme.css", themeFor = "vaadin-tabs") // Styles for vaadin-tabs
@CssImport(value = "./styles/point-theme.css", themeFor = "vaadin-tab") // Styles for vaadin-tab
public class AppShell implements AppShellConfigurator {
    // No code needed inside this class unless you have other shell-specific configurations
}