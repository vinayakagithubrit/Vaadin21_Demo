package com.example;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.Route;

/**
 * Main view for TCS Management, using AbstractManagementView for common layout and tab logic.
 * Mapped to http://localhost:9090/vaadin21-spring-mvc-1.0-SNAPSHOT/ui
 */
@Route("ui")
public class TcsManagementView extends AbstractManagementView {

    // --- Inner View Classes for TCS Management ---
    // (These remain unchanged, as they are implicitly part of the TcsManagementView's route structure)
    @Route(value = "terminal_batches", layout = TcsManagementView.class)
    public static class TerminalBatchesView extends VerticalLayout {
        public TerminalBatchesView() { add(new H1("Terminal Batches Management")); add(new Span("Content for Terminal Batches...")); }
    }
    @Route(value = "settlement_batches", layout = TcsManagementView.class)
    public static class SettlementBatchesView extends VerticalLayout {
        public SettlementBatchesView() {
            add(new H1("Settlement Batches Management"));
            add(new Span("Content for Settlement Batches..."));
        }
    }
    @Route(value = "transactions", layout = TcsManagementView.class)
    public static class TransactionsView extends VerticalLayout {
        public TransactionsView() { add(new H1("Transaction Management")); add(new Span("Content for Transaction Management...")); }
    }
    @Route(value = "real_time_transactions", layout = TcsManagementView.class)
    public static class RealTimeTransactionsView extends VerticalLayout {
        public RealTimeTransactionsView() { add(new H1("Real-time Transactions Management")); add(new Span("Content for Real-time Transactions...")); }
    }
    @Route(value = "pre_authorizations", layout = TcsManagementView.class)
    public static class PreAuthorizationsView extends VerticalLayout {
        public PreAuthorizationsView() { add(new H1("Pre-Authorizations Management")); add(new Span("Content for Pre-Authorizations...")); }
    }
    @Route(value = "tokens", layout = TcsManagementView.class)
    public static class TokensView extends VerticalLayout {
        public TokensView() { add(new H1("Token Management")); add(new Span("Content for Token Management...")); }
    }
    @Route(value = "user_actions", layout = TcsManagementView.class)
    public static class UserActionsView extends VerticalLayout {
        public UserActionsView() { add(new H1("User Actions Management")); add(new Span("Content for User Actions...")); }
    }
    @Route(value = "close_batches", layout = TcsManagementView.class)
    public static class CloseBatchesView extends VerticalLayout {
        public CloseBatchesView() { add(new H1("End of Day (Close Batches) Management")); add(new Span("Content for End of Day...")); }
    }
    @Route(value = "nn_eod", layout = TcsManagementView.class)
    public static class NetsNoEODView extends VerticalLayout {
        public NetsNoEODView() { add(new H1("NetsNo EOD Management")); add(new Span("Content for NetsNo EOD...")); }
    }
    @Route(value = "transaction_billing", layout = TcsManagementView.class)
    public static class TransactionBillingView extends VerticalLayout {
        public TransactionBillingView() { add(new H1("Transaction Billing Management")); add(new Span("Content for Transaction Billing...")); }
    }

    // NEW CLASS: This view will redirect to the dashboard
    @Route(value = "dashboard_redirect", layout = TcsManagementView.class)
    public static class RedirectToDashboardView extends VerticalLayout implements BeforeEnterObserver {

        // ... (constructor and other fields) ...

        @Override
        public void beforeEnter(BeforeEnterEvent event) {
            UI ui = UI.getCurrent();
            String contextPath = "/vaadin21-spring-mvc-1.0-SNAPSHOT"; // Replace or inject
            String dashboardUrl = contextPath + "/dashboard";

            ui.getPage().setLocation(dashboardUrl);

            // Option C: Prevent this view from being rendered by forwarding to an empty route
            // This effectively stops the current navigation.
            event.forwardTo(""); // Forwards to the default route (e.g., your AppShell or whatever is at the root)
            // This is often sufficient when a client-side redirect is performed.

            // Option D (If you want to completely stop further processing of *this* route matching):
            // event.getUI().ifPresent(ui -> ui.navigate(MyDummyEmptyRoute.class)); // Navigates to a dummy route
            // to essentially "break" the current navigation.
            // Less common for simple external redirects.
        }
    }

    public TcsManagementView() {
        super();
    }

    @Override
    protected void addTabs() {
        addTabAndLink(navigationTabs, "Terminal Batches", TerminalBatchesView.class);
        addTabAndLink(navigationTabs, "Settlement Batches", SettlementBatchesView.class);
        addTabAndLink(navigationTabs, "Transactions", TransactionsView.class);
        addTabAndLink(navigationTabs, "Real-time Transactions", RealTimeTransactionsView.class);
        addTabAndLink(navigationTabs, "Pre-Authorizations", PreAuthorizationsView.class);
        addTabAndLink(navigationTabs, "Tokens", TokensView.class);
        addTabAndLink(navigationTabs, "User Actions", UserActionsView.class);
        addTabAndLink(navigationTabs, "Close Batches", CloseBatchesView.class);
        addTabAndLink(navigationTabs, "NetsNo EOD", NetsNoEODView.class);
        addTabAndLink(navigationTabs, "Transaction Billing", TransactionBillingView.class);
        addTabAndLink(navigationTabs, "TCS Mgmt 1.0", RedirectToDashboardView.class);
    }

    @Override
    protected String getPageTitle() {
        return "TCS Management Dashboard";
    }
}