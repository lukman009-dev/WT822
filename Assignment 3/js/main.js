// js/main.js - shared utilities and navbar dropdown actions
$(document).ready(function() {
    // handle dropdown actions: change password, profile, logout
    $(document).on('click', '#changePasswordBtn', function(e) {
        e.preventDefault();
        alert('🔐 Demo: Change password functionality (integrate with backend).');
    });
    $(document).on('click', '#changeProfileBtn', function(e) {
        e.preventDefault();
        alert('👤 Demo: Update profile information.');
    });
    $(document).on('click', '#logoutBtn', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
    
    // highlight active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    $('.nav-link').each(function() {
        const href = $(this).attr('href');
        if (href === currentPage) {
            $(this).addClass('active fw-semibold');
        } else if (currentPage === 'dashboard.html' && href === 'dashboard.html') {
            $(this).addClass('active');
        }
    });
    
    // generic toast-like info (optional)
    console.log('SUZA Portal ready — shared JS loaded');
});