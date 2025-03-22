

    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Obtém o alvo da seção
            const target = link.getAttribute('data-target');

            // Esconde todas as seções e remove a classe "active"
            sections.forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');

        history.pushState(null, '', target);


        sections.forEach(section => section.style.display = 'none');
        document.getElementById(target).style.display = 'block';
        });
    });