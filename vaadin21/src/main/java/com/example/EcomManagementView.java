package com.example;

import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

/**
 * Main view for E-Commerce Management, using AbstractManagementView for common layout and tab logic.
 * Mapped to http://localhost:9090/vaadin21-spring-mvc-1.0-SNAPSHOT/ecom
 */
@Route("ecom")
public class EcomManagementView extends AbstractManagementView {

    // --- Inner View Classes for E-commerce Management ---
    // These are placeholders. You should replace these with your actual Vaadin Flow components
    // (e.g., your CardPaymentManagement.java, ElectronicPaymentManagement.java etc.)
    // If these components were originally Vaadin 7 Viewlets, they need to be
    // reimplemented as Vaadin Flow Components.
    @Route(value = "card_payments", layout = EcomManagementView.class)
    public static class CardPaymentManagementView extends VerticalLayout {
        public CardPaymentManagementView() { add(new H1("Card Payment Management")); add(new Span("Content for Card Payments...")); }
    }

    @Route(value = "electronic_payments", layout = EcomManagementView.class)
    public static class ElectronicPaymentManagementView extends VerticalLayout {
        public ElectronicPaymentManagementView() { add(new H1("Electronic Payment Management")); add(new Span("Content for Electronic Payments...")); }
    }

    @Route(value = "invoice_payments", layout = EcomManagementView.class)
    public static class InvoicePaymentManagementView extends VerticalLayout {
        public InvoicePaymentManagementView() { add(new H1("Invoice Payment Management")); add(new Span("Content for Invoice Payments...")); }
    }

    @Route(value = "refunds", layout = EcomManagementView.class)
    public static class RefundManagementView extends VerticalLayout {
        public RefundManagementView() { add(new H1("Refund Management")); add(new Span("Content for Refunds...")); }
    }

    @Route(value = "rejected_payments", layout = EcomManagementView.class)
    public static class RejectedPaymentManagementView extends VerticalLayout {
        public RejectedPaymentManagementView() { add(new H1("Rejected Payment Management")); add(new Span("Content for Rejected Payments...")); }
    }

    @Route(value = "merchants", layout = EcomManagementView.class)
    public static class MerchantManagementView extends VerticalLayout {
        public MerchantManagementView() { add(new H1("Merchant Management")); add(new Span("Content for Merchants...")); }
    }

    @Route(value = "acquirers", layout = EcomManagementView.class)
    public static class AcquirerManagementView extends VerticalLayout {
        public AcquirerManagementView() { add(new H1("Acquirer Management")); add(new Span("Content for Acquirers...")); }
    }

    @Route(value = "saio_support", layout = EcomManagementView.class)
    public static class SAIOSupportManagementView extends VerticalLayout {
        public SAIOSupportManagementView() { add(new H1("SAIO Support Management")); add(new Span("Content for SAIO Support...")); }
    }

    public EcomManagementView() {
        super(); // Call the constructor of the AbstractManagementView
    }

    @Override
    protected void addTabs() {
        // Define specific tabs for E-commerce Management based on your SiteDescriptor
        // The labels here are derived from your ViewDescriptor's titles.
        addTabAndLink(navigationTabs, "Card Payments", CardPaymentManagementView.class);
        addTabAndLink(navigationTabs, "Electronic Payments", ElectronicPaymentManagementView.class);
        addTabAndLink(navigationTabs, "Invoice Payments", InvoicePaymentManagementView.class);
        addTabAndLink(navigationTabs, "Refunds", RefundManagementView.class);
        addTabAndLink(navigationTabs, "Rejected Payments", RejectedPaymentManagementView.class);
        addTabAndLink(navigationTabs, "Merchants", MerchantManagementView.class);
        addTabAndLink(navigationTabs, "Acquirers", AcquirerManagementView.class);
        addTabAndLink(navigationTabs, "SAIO Support", SAIOSupportManagementView.class);
        addTabAndLink(navigationTabs, "TCS Mgmt 1.0", TcsManagementView.RedirectToDashboardView.class);
    }

    @Override
    protected String getPageTitle() {
        return "E-Commerce Management Dashboard";
    }
}