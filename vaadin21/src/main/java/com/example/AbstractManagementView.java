package com.example;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.router.AfterNavigationEvent;
import com.vaadin.flow.router.AfterNavigationObserver;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.HighlightConditions;
import com.vaadin.flow.router.RouterLayout;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.theme.Theme; // Import Theme annotation
import com.vaadin.flow.component.dependency.CssImport; // Import CssImport annotation

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

public abstract class AbstractManagementView extends VerticalLayout implements BeforeEnterObserver, AfterNavigationObserver, RouterLayout {

    protected final Tabs navigationTabs;
    protected final Map<Tab, Class<? extends Component>> tabToViewClassMap;
    protected final Map<Class<? extends Component>, Tab> viewClassToTabMap;

    // For logging
    private static final org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(AbstractManagementView.class);


    public AbstractManagementView() {
        setSizeFull();
        setSpacing(false);

        // 1. Header
        H1 headerTitle = new H1(getPageTitle());
        headerTitle.addClassName("main-header"); // Apply custom class for styling
        HorizontalLayout headerLayout = new HorizontalLayout(headerTitle);
        headerLayout.setWidthFull();
        headerLayout.setAlignItems(FlexComponent.Alignment.CENTER);
        headerLayout.setJustifyContentMode(FlexComponent.JustifyContentMode.END);
        add(headerLayout);

        // 2. Navigation Tabs
        navigationTabs = new Tabs();
        navigationTabs.addThemeVariants();
        navigationTabs.setWidthFull();
        navigationTabs.setFlexGrowForEnclosedTabs(1);

        tabToViewClassMap = new LinkedHashMap<>();
        viewClassToTabMap = new LinkedHashMap<>();

        addTabs(); // Populate tabs from concrete class

        add(navigationTabs);

        // Set up tab change listener to update content based on selected tab and log it
        navigationTabs.addSelectedChangeListener(event -> {
            Tab selectedTab = navigationTabs.getSelectedTab();
            Class<? extends Component> selectedViewClass = tabToViewClassMap.get(selectedTab);
            if (selectedViewClass != null) {
                logger.info("Tab changed: Navigating to {} (corresponding view: {})",
                        selectedTab.getElement().getText(), selectedViewClass.getSimpleName());
                getUI().ifPresent(ui -> ui.navigate(selectedViewClass));
            } else {
                logger.warn("Tab changed: No view class found for selected tab.");
            }
        });

        logger.info("AbstractManagementView initialized for: {}", getPageTitle());
    }

    protected abstract void addTabs();
    protected abstract String getPageTitle();

    protected void addTabAndLink(Tabs tabs, String tabLabel, Class<? extends Component> viewClass) {
        RouterLink link = new RouterLink(tabLabel, viewClass);
        link.setHighlightCondition(HighlightConditions.sameLocation());
        Tab tab = new Tab(link);
        tabs.add(tab);
        tabToViewClassMap.put(tab, viewClass);
        viewClassToTabMap.put(viewClass, tab);
        logger.debug("Added tab: '{}' mapped to view: {}", tabLabel, viewClass.getSimpleName());
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        Class<? extends Component> targetViewClass = (Class<? extends Component>) event.getNavigationTarget();
        Tab tabToSelect = viewClassToTabMap.get(targetViewClass);

        if (tabToSelect != null) {
            if (navigationTabs.getSelectedTab() != tabToSelect) {
                navigationTabs.setSelectedTab(tabToSelect);
                logger.info("beforeEnter: Selected tab set to '{}' based on URL navigation to {}",
                        tabToSelect.getElement().getText(), targetViewClass.getSimpleName());
            }
        } else if (!tabToViewClassMap.isEmpty() && targetViewClass.equals(this.getClass())) {
            // If navigated to the base URL (e.g., /ui or /ecom) without a sub-route
            Class<? extends Component> firstViewClass = tabToViewClassMap.values().iterator().next();
            logger.info("beforeEnter: No specific sub-route, forwarding to first tab: {}", firstViewClass.getSimpleName());
            event.forwardTo(firstViewClass);
        } else {
            logger.warn("beforeEnter: No matching tab found for target view: {}", targetViewClass.getSimpleName());
        }
    }

    @Override
    public void afterNavigation(AfterNavigationEvent event) {
        logger.debug("afterNavigation: Current location: {}", event.getLocation().getPath());
    }

    //@Override
    public void showRouterLayoutContent(Component content) {
        // Default RouterLayout behavior, can be overridden for specific placement
        // For this setup, content is added as a child of the VerticalLayout (AbstractManagementView)
    }
}