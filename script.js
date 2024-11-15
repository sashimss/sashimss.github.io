// Tab Buttons
const workExperienceBtn = document.getElementById('work-experience-btn');
const projectsBtn = document.getElementById('projects-btn');

// Sections
const workExperienceSection = document.getElementById('work-experience');
const projectsSection = document.getElementById('projects');

// Button Event Listeners
workExperienceBtn.addEventListener('click', () => {
    workExperienceSection.classList.remove('hidden');
    projectsSection.classList.add('hidden');
    workExperienceBtn.classList.add('active');
    projectsBtn.classList.remove('active');
});

projectsBtn.addEventListener('click', () => {
    projectsSection.classList.remove('hidden');
    workExperienceSection.classList.add('hidden');
    projectsBtn.classList.add('active');
    workExperienceBtn.classList.remove('active');
});
