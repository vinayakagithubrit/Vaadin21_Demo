package com.example;


import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("myvaadinview")
public class MyVaadinFlowView extends VerticalLayout {

    public MyVaadinFlowView() {
        // Set layout properties directly on the VerticalLayout instance (this)
        setMargin(true);
        setSpacing(true);
        setHeightFull(); // Equivalent to Vaadin 7's 100% height for layout, if needed

        // Vaadin Flow components:
        // Vaadin 7: com.vaadin.ui.Label -> Vaadin 21: com.vaadin.flow.component.html.Label (or Paragraph, Span, Div)
        Label label = new Label("Hello from Vaadin 21!");
        add(label); // Use add() method for adding components to a layout in Vaadin Flow

        // Vaadin 7: com.vaadin.ui.Button -> Vaadin 21: com.vaadin.flow.component.button.Button
        Button button = new Button("Click Me!");

        // Event handling in Vaadin Flow:
        // Vaadin 7: button.addClickListener(event -> label.setValue("..."));
        // Vaadin 21: button.addClickListener(event -> label.setText("...")); (use setText() for Label content)
        button.addClickListener(event -> label.setText("Button clicked in Vaadin 21!"));
        add(button); // Add the button to the layout
    }
}