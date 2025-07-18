package com.example; // Ensure this package matches your project structure

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import javax.servlet.http.HttpSession;

@Controller
public class AuthController {

    @Autowired
    private GlobalUrlBean globalUrlBean;


    @GetMapping("/login")
    public String showLoginPage(Model model) {
        String appBaseUrl = globalUrlBean.getAppBaseUrlContext();
        model.addAttribute("appBaseUrlContext", appBaseUrl);
        return "login";
    }

    @PostMapping("/login")
    public String processLogin(@RequestParam String username, @RequestParam String password,
                               HttpSession session, RedirectAttributes redirectAttributes, Model model) {
        String appBaseUrl = globalUrlBean.getAppBaseUrlContext();

        // Simple authentication logic (replace with your actual logic, e.g., Spring Security)
        if ("user".equals(username) && "password".equals(password)) {
            session.setAttribute("loggedInUser", username);
            model.addAttribute("appBaseUrlContext", appBaseUrl);
            // For internal redirects within the same context, Spring can often resolve without the full context path
            return "redirect:/dashboard";
        } else {
            redirectAttributes.addFlashAttribute("error", "Invalid username or password");
            model.addAttribute("appBaseUrlContext", appBaseUrl);
            // For internal redirects, this will also typically resolve correctly without explicit context path
            return "redirect:/login";
        }
    }

    @GetMapping("/dashboard") // You need a dashboard GET mapping to pass the context path to dashboard.jsp
    public String showDashboardPage(Model model) {
        String appBaseUrl = globalUrlBean.getAppBaseUrlContext();
        model.addAttribute("appBaseUrlContext", appBaseUrl);
        System.out.println("Dashboard page: Adding appBaseUrlContext to model: " + appBaseUrl);
        return "dashboard"; // Resolves to /WEB-INF/views/dashboard.jsp
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate(); // Invalidate the session
        // CRITICAL: Construct the redirect URL using the dynamic appBaseUrlContext
        // This ensures the redirect goes to the correct context path for /login
        String logoutRedirectUrl = "redirect:/login";
        System.out.println("Logout: Redirecting to: " + logoutRedirectUrl); // For debugging
        return logoutRedirectUrl; // Redirect to login page with dynamic context path
    }
}