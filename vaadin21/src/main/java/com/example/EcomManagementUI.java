package com.example;

import com.vaadin.annotations.Theme;
import com.vaadin.server.VaadinRequest;
import com.vaadin.ui.Button;
import com.vaadin.ui.Label;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

@Theme("valo")
public class EcomManagementUI extends UI {

    @Override
    protected void init(VaadinRequest request) {
        VerticalLayout layout = new VerticalLayout();
        layout.setMargin(true);
        layout.setSpacing(true);

        Label label = new Label("Hello from Vaadin 7!");
        layout.addComponent(label);

        Button button = new Button("Click Me!");
        button.addClickListener(event -> label.setValue("Button clicked!"));
        layout.addComponent(button);

        setContent(layout);
    }
}