// Mobile navigation toggle
document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav ul').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.burger-menu') && !e.target.closest('nav')) {
        document.querySelector('.burger-menu')?.classList.remove('active');
        document.querySelector('nav ul')?.classList.remove('active');
    }
});

// Newsletter form submission
document.querySelector('.newsletter form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const submitButton = e.target.querySelector('button');
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Subscribing...';
        
        // Add your newsletter API endpoint here
        const response = await fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailInput.value }),
        });
        
        if (!response.ok) throw new Error('Subscription failed');
        
        emailInput.value = '';
        submitButton.textContent = 'Subscribed!';
        setTimeout(() => {
            submitButton.textContent = 'Subscribe';
            submitButton.disabled = false;
        }, 2000);
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        submitButton.textContent = 'Error - Try Again';
        submitButton.disabled = false;
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product cards animation
const productCards = document.querySelectorAll('.product-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

productCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
