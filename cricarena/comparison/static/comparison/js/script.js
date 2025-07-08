class IPLComparison {
    constructor() {
        this.selectedTeam1 = null;
        this.selectedTeam2 = null;
        this.selectedPlayer1 = null;
        this.selectedPlayer2 = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateTeamDropdowns();
        this.updatePlayerCount();
    }

    setupEventListeners() {
        // Team dropdownComps
        document.getElementById('team1-btn').addEventListener('click', () => this.toggleDropdown('team1'));
        document.getElementById('team2-btn').addEventListener('click', () => this.toggleDropdown('team2'));

        // Player dropdownComps
        document.getElementById('player1-btn').addEventListener('click', () => this.toggleDropdown('player1'));
        document.getElementById('player2-btn').addEventListener('click', () => this.toggleDropdown('player2'));

        // Close dropdownComps when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdownComp')) {
                this.closeAllDropdowns();
            }
        });
    }

    toggleDropdown(type) {
        const dropdownComp = document.getElementById(`${type}-dropdownComp`);
        const btn = document.getElementById(`${type}-btn`);

        if (btn.classList.contains('disabled')) return;

        this.closeAllDropdowns();
        dropdownComp.classList.toggle('open');
    }

    closeAllDropdowns() {
        document.querySelectorAll('.dropdownComp').forEach(dropdownComp => {
            dropdownComp.classList.remove('open');
        });
    }

    populateTeamDropdowns() {
        this.populateTeamMenu('team1');
        this.populateTeamMenu('team2');
    }

    populateTeamMenu(teamType) {
        const menu = document.getElementById(`${teamType}-menu`);
        menu.innerHTML = '';

        teams.forEach(team => {
            const item = document.createElement('button');
            item.className = 'dropdownComp-item';
            item.innerHTML = `
            <img src="${team.logo}" alt="${team.name}" class="team-logo-img">
            <div class="item-info">
                <div class="item-name">${team.name}</div>
                <div class="item-details">
                    <span class="item-country">${team.shortName}</span>
                </div>
            </div>
        `;
            item.addEventListener('click', () => this.selectTeam(teamType, team));
            menu.appendChild(item);
        });
    }

    selectTeam(teamType, team) {
        if (teamType === 'team1') {
            this.selectedTeam1 = team;
            this.selectedPlayer1 = null;
        } else {
            this.selectedTeam2 = team;
            this.selectedPlayer2 = null;
        }

        this.updateTeamButton(teamType, team);
        this.populatePlayerMenu(teamType);
        this.enablePlayerDropdown(teamType);
        this.closeAllDropdowns();
        this.updateDisplay();
    }

    updateTeamButton(teamType, team) {
        const btn = document.getElementById(`${teamType}-btn`);
        const content = btn.querySelector('.dropdownComp-content');
        content.innerHTML = `
        <img src="${team.logo}" alt="${team.name}" class="team-logo-img">
        <div class="item-info">
            <div class="item-name">${team.name}</div>
            <div class="item-details">
                <span class="item-country">${team.shortName}</span>
            </div>
        </div>
    `;
        content.classList.remove('placeholder');
    }

    enablePlayerDropdown(teamType) {
        const btn = document.getElementById(`${teamType.replace('team', 'player')}-btn`);
        const content = btn.querySelector('.dropdownComp-content');

        btn.classList.remove('disabled');
        content.innerHTML = `
            <i class="fas fa-user"></i>
            Choose a player...
        `;
        content.classList.add('placeholder');
    }

    populatePlayerMenu(teamType) {
    const playerType = teamType.replace('team', 'player');
    const menu = document.getElementById(`${playerType}-menu`);
    const teamId = teamType === 'team1' ? this.selectedTeam1.id : this.selectedTeam2.id;

    menu.innerHTML = '';

    // Add Cancel option at the top
    const cancelItem = document.createElement('button');
    cancelItem.className = 'dropdownComp-item cancel-option';
    cancelItem.innerHTML = `
        <i class="fas fa-times-circle"></i>
        <div class="item-info">
            <div class="item-name">Cancel Selection</div>
        </div>
    `;
    cancelItem.addEventListener('click', () => this.cancelPlayerSelection(playerType));
    menu.appendChild(cancelItem);

    // Add divider
    const divider = document.createElement('div');
    divider.className = 'dropdownComp-divider';
    menu.appendChild(divider);

    // Add players
    const teamPlayers = players.filter(player => player.team === teamId);

    teamPlayers.forEach(player => {
        const item = document.createElement('button');
        item.className = 'dropdownComp-item';
        item.innerHTML = `
            <img src="${player.photo}" alt="${player.name}" class="player-photo">
            <div class="item-info">
                <div class="item-name">${player.name}</div>
                <div class="item-details">
                    <span class="role-badge role-${player.role.toLowerCase().replace('-', '-')}">${player.role}</span>
                    <span class="item-country">${player.country}</span>
                </div>
            </div>
        `;
        item.addEventListener('click', () => this.selectPlayer(playerType, player));
        menu.appendChild(item);
    });
}

cancelPlayerSelection(playerType) {
    const btn = document.getElementById(`${playerType}-btn`);
    const content = btn.querySelector('.dropdownComp-content');
    
    if (playerType === 'player1') {
        this.selectedPlayer1 = null;
    } else {
        this.selectedPlayer2 = null;
    }

    // Reset button to placeholder
    content.innerHTML = `
        <i class="fas fa-user"></i>
        Choose a player...
    `;
    content.classList.add('placeholder');
    
    this.closeAllDropdowns();
    this.updateDisplay();
}

    selectPlayer(playerType, player) {
        if (playerType === 'player1') {
            this.selectedPlayer1 = player;
        } else {
            this.selectedPlayer2 = player;
        }

        this.updatePlayerButton(playerType, player);
        this.closeAllDropdowns();
        this.updateDisplay();
    }

    updatePlayerButton(playerType, player) {
        const btn = document.getElementById(`${playerType}-btn`);
        const content = btn.querySelector('.dropdownComp-content');
        content.innerHTML = `
            <img src="${player.photo}" alt="${player.name}" class="player-photo">
            <div class="item-info">
                <div class="item-name">${player.name}</div>
                <div class="item-details">
                    <span class="role-badge role-${player.role.toLowerCase().replace('-', '-')}">${player.role}</span>
                    <span class="item-country">${player.country}</span>
                </div>
            </div>
        `;
        content.classList.remove('placeholder');
    }

    updateDisplay() {
    const comparisonArea = document.getElementById('comparison-area');
    const playerCards = document.getElementById('player-cards');
    const emptyState = document.getElementById('empty-state');

    if (this.selectedPlayer1 && this.selectedPlayer2) {
        // Show comparison only (no player cards)
        this.renderComparison();
        comparisonArea.classList.remove('hidden');
        playerCards.classList.add('hidden');
        emptyState.classList.add('hidden');
    } else if (this.selectedPlayer1 || this.selectedPlayer2) {
        // Show player cards and comparison with placeholder
        this.renderComparison();
        this.renderPlayerCards();
        comparisonArea.classList.remove('hidden');
        playerCards.classList.remove('hidden');
        emptyState.classList.add('hidden');
    } else {
        // Show empty state
        comparisonArea.classList.add('hidden');
        playerCards.classList.add('hidden');
        emptyState.classList.remove('hidden');
    }
}

    renderComparison() {
        const comparisonArea = document.getElementById('comparison-area');
        const placeholderPlayer = {
        name: 'No player chosen',
        role: 'N/A',
        country: 'N/A',
        photo: 'https://via.placeholder.com/150?text=Select+Player',
        stats: {
            batting: { 
                matches: 0, 
                runs: 0, 
                average: 0, 
                strikeRate: 0, 
                fifties: 0, 
                hundreds: 0, 
                highestScore: 0 
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0'
            },
            fielding: { 
                catches: 0, 
                stumpings: 0 
            },
        }
    };
         const player1 = this.selectedPlayer1 || placeholderPlayer;
    const player2 = this.selectedPlayer2 || placeholderPlayer;
    const team1Color = this.selectedTeam1?.color || '#CCCCCC';
    const team2Color = this.selectedTeam2?.color || '#CCCCCC';

        // In renderComparison(), update the player info sections:
        comparisonArea.innerHTML = `
    <div class="comparison-card">
        <div class="comparison-header">
            <div class="comparison-players">
                <div class="player-info animate-left">
                    <img src="${player1.photo}" alt="${player1.name}" class="player-avatar">
                    <div class="player-details">
                        <h3>${player1.name}</h3>
                        <p>${player1.role} • ${player1.country}</p>
                        ${this.selectedTeam1 ? `
                            <div class="team-indicator">
                                <div class="team-dot" style="background-color: ${team1Color}"></div>
                                <span>${this.selectedTeam1.name}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="vs-indicator">
                    <div class="vs-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="vs-text">VS</div>
                </div>
                
                <div class="player-info animate-right">
                    <div class="player-details" style="text-align: right;">
                        <h3>${player2.name}</h3>
                        <p>${player2.role} • ${player2.country}</p>
                        ${this.selectedTeam2 ? `
                            <div class="team-indicator" style="justify-content: flex-end;">
                                <span>${this.selectedTeam2.name}</span>
                                <div class="team-dot" style="background-color: ${team2Color}"></div>
                            </div>
                        ` : ''}
                    </div>
                    <img src="${player2.photo}" alt="${player2.name}" class="player-avatar">
                </div>
            </div>
        </div>
                
                <div class="stats-comparison">
                    
                ${this.renderStatsSection('Overall Batting', 'fas fa-bullseye', [
            { label: 'Matches', value1: player1.stats.batting.matches, value2: player2.stats.batting.matches },
            { label: 'Total Runs', value1: player1.stats.batting.runs, value2: player2.stats.batting.runs },
            { label: 'Batting Average', value1: player1.stats.batting.average, value2: player2.stats.batting.average, format: 'decimal' },
            { label: 'Strike Rate', value1: player1.stats.batting.strikeRate, value2: player2.stats.batting.strikeRate, format: 'decimal' },
            { label: '100s', value1: player1.stats.batting.hundreds, value2: player2.stats.batting.hundreds, format: 'decimal' },
            { label: '50s', value1: player1.stats.batting.fifties, value2: player2.stats.batting.fifties, format: 'decimal' },
            { label: 'Highest Score', value1: player1.stats.batting.highestScore, value2: player2.stats.batting.highestScore, format: 'decimal' },
        ], team1Color, team2Color)}
                    
                    ${player1.stats.bowling && player2.stats.bowling ?
                this.renderStatsSection('Overall Bowling', 'fas fa-bolt', [
                    { label: 'Total Wickets', value1: player1.stats.bowling.wickets, value2: player2.stats.bowling.wickets },
                    { label: 'Bowling Average', value1: player1.stats.bowling.average, value2: player2.stats.bowling.average, format: 'decimal', isReverse: true },
                    { label: 'Economy Rate', value1: player1.stats.bowling.economy, value2: player2.stats.bowling.economy, format: 'decimal', isReverse: true },
                    { label: '5 Wickets Haul', value1: player1.stats.bowling.fiveWickets, value2: player2.stats.bowling.fiveWickets },
                    { label: 'Best Figures', value1: player1.stats.bowling.bestFigures, value2: player2.stats.bowling.bestFigures, format: 'bestFigures' },
                ], team1Color, team2Color) : ''
            }
                    
                    ${this.renderStatsSection('Fielding Performance', 'fas fa-shield-alt', [
                { label: 'Catches', value1: player1.stats.fielding.catches, value2: player2.stats.fielding.catches },
                { label: 'Stumpings', value1: player1.stats.fielding.stumpings, value2: player2.stats.fielding.stumpings },
            ], team1Color, team2Color)}
                </div>
            </div>
        `;

        // Trigger animations
        setTimeout(() => this.animateComparison(), 100);
    }

    renderStatsSection(title, icon, stats, team1Color, team2Color) {
        return `
            <div class="stats-section">
                <div class="stats-title">
                    <i class="${icon}"></i>
                    <span>${title}</span>
                </div>
                ${stats.map((stat, index) => this.renderStatRow(stat, team1Color, team2Color, index)).join('')}
            </div>
        `;
    }

    renderStatRow(stat, team1Color, team2Color, index) {
    const { label, value1, value2, unit = '', isReverse = false, format = 'number' } = stat;

    const formatValue = (value) => {
        if (format === 'text' || format === 'bestFigures') return value;
        return format === 'decimal' ? value.toFixed(2) : value.toString();
    };

    const getBetterPlayer = () => {
        // Special handling for Best Figures (wickets/runs)
        if (format === 'bestFigures') {
            const [wickets1, runs1] = value1.split('/').map(Number);
            const [wickets2, runs2] = value2.split('/').map(Number);
            
            // More wickets is better
            if (wickets1 > wickets2) return 1;
            if (wickets1 < wickets2) return 2;
            
            // If same wickets, fewer runs is better
            if (runs1 < runs2) return 1;
            if (runs1 > runs2) return 2;
            
            return 0; // Equal
        }
        
        if (format === 'text') return 0;
        if (value1 === value2) return 0;
        if (isReverse) {
            return value1 < value2 ? 1 : 2;
        }
        return value1 > value2 ? 1 : 2;
    };

    const betterPlayer = getBetterPlayer();
    
    // Calculate percentages based on metric type
    let percentage1 = 50;
    
    if (format === 'bestFigures') {
        const [wickets1] = value1.split('/').map(Number);
        const [wickets2] = value2.split('/').map(Number);
        const totalWickets = wickets1 + wickets2;
        percentage1 = totalWickets > 0 ? (wickets1 / totalWickets) * 100 : 50;
    } 
    else if (isReverse && format !== 'text') {
        // For reverse metrics (lower is better)
        const inverseValue1 = value1 > 0 ? 1 / value1 : 0;
        const inverseValue2 = value2 > 0 ? 1 / value2 : 0;
        const total = inverseValue1 + inverseValue2;
        percentage1 = total > 0 ? (inverseValue1 / total) * 100 : 50;
    } 
    else if (format !== 'text') {
        // For normal metrics (higher is better)
        const total = value1 + value2;
        percentage1 = total > 0 ? (value1 / total) * 100 : 50;
    }

    return `
    <div class="stat-row" data-index="${index}">
        <div class="stat-value ${betterPlayer === 1 ? 'better' : 'worse'}">
            ${formatValue(value1)}${unit}
        </div>
        
        <div class="stat-progress">
            <div class="stat-label">${label}</div>
            ${format === 'text' || format === 'bestFigures' ?
            `<div class="progress-container" style="height: auto; background: none; box-shadow: none;">
                    <div style="text-align: center; padding: 0.5rem; color: #6b7280; font-size: 0.875rem;">
                        vs
                    </div>
                </div>` :
            `<div class="progress-container">
                    <div class="progress-bar left ${percentage1 >= 100 ? 'full-left' : ''}" 
                         style="width: 0%; background-color: ${team1Color}; opacity: ${betterPlayer === 1 ? 1 : 0.6};">
                    </div>
                    <div class="progress-bar right ${(100 - percentage1) >= 100 ? 'full-right' : ''}" 
                         style="width: 0%; background-color: ${team2Color}; opacity: ${betterPlayer === 2 ? 1 : 0.6};">
                    </div>
                    <div class="progress-highlight"></div>
                </div>
                <div class="progress-percentages">
                    <span class="progress-percent">${Math.min(percentage1, 100).toFixed(1)}%</span>
                    <span class="progress-percent right">${Math.min(100 - percentage1, 100).toFixed(1)}%</span>
                </div>`
        }
        </div>
        
        <div class="stat-value right ${betterPlayer === 2 ? 'better' : 'worse'}">
            ${formatValue(value2)}${unit}
        </div>
    </div>
`;
}

    animateComparison() {
        const statRows = document.querySelectorAll('.stat-row');

        statRows.forEach((row, index) => {
            const delay = index * 200;

            setTimeout(() => {
                // Animate stat values
                const statValues = row.querySelectorAll('.stat-value');
                const statLabel = row.querySelector('.stat-label');

                statValues.forEach(value => value.classList.add('animate'));
                statLabel.classList.add('animate');

                // Animate progress bars
                setTimeout(() => {
                    const progressBars = row.querySelectorAll('.progress-bar');
                    const progressHighlight = row.querySelector('.progress-highlight');
                    const progressPercents = row.querySelectorAll('.progress-percent');

                    progressBars.forEach((bar, barIndex) => {
                        const isLeft = bar.classList.contains('left');
                        const percentage = isLeft ?
                            parseFloat(row.querySelector('.progress-percent').textContent) :
                            parseFloat(row.querySelector('.progress-percent.right').textContent);

                        bar.style.width = `${Math.min(percentage, 100)}%`;
                    });

                    if (progressHighlight) {
                        progressHighlight.classList.add('animate');
                    }

                    setTimeout(() => {
                        progressPercents.forEach(percent => percent.classList.add('animate'));
                    }, 600);
                }, 200);
            }, delay);
        });
    }

    renderPlayerCards() {
    const playerCards = document.getElementById('player-cards');
    let cardsHTML = '';

    // Show player 1 card if only player 1 is selected
    if (this.selectedPlayer1 && !this.selectedPlayer2) {
        cardsHTML = `
            <div class="player-card-section">
                <h3 class="player-card-title">
                    <span class="team-dot" style="background-color: ${this.selectedTeam1?.color || '#3B82F6'}"></span>
                    ${this.selectedPlayer1.name}
                </h3>
                ${this.renderPlayerCard(this.selectedPlayer1, this.selectedTeam1?.color)}
            </div>
        `;
    }
    // Show player 2 card if only player 2 is selected
    else if (!this.selectedPlayer1 && this.selectedPlayer2) {
        cardsHTML = `
            <div class="player-card-section">
                <h3 class="player-card-title">
                    <span class="team-dot" style="background-color: ${this.selectedTeam2?.color || '#8B5CF6'}"></span>
                    ${this.selectedPlayer2.name}
                </h3>
                ${this.renderPlayerCard(this.selectedPlayer2, this.selectedTeam2?.color)}
            </div>
        `;
    }
    // Don't show any player cards when both are selected
    else {
        cardsHTML = '';
    }

    playerCards.innerHTML = cardsHTML;
}

    renderPlayerCard(player, teamColor) {
        const getRoleClass = (role) => {
            switch (role) {
                case 'Batsman': return 'role-batsman';
                case 'Bowler': return 'role-bowler';
                case 'All-rounder': return 'role-all-rounder';
                case 'Wicket-keeper': return 'role-wicket-keeper';
                default: return 'role-batsman';
            }
        };

        const getPressureRating = (index) => {
            if (index >= 90) return { label: 'Elite', class: 'pressure-elite' };
            if (index >= 80) return { label: 'Excellent', class: 'pressure-excellent' };
            if (index >= 70) return { label: 'Good', class: 'pressure-good' };
            if (index >= 60) return { label: 'Average', class: 'pressure-average' };
            return { label: 'Below Par', class: 'pressure-below-par' };
        };

        const pressureRating = getPressureRating(player.stats.pressure.pressureIndex);

        return `
            <div class="player-card">
                <div class="player-card-header" style="background-color: ${teamColor || '#3B82F6'}">
                    <img src="${player.photo}" alt="${player.name}" class="player-card-avatar">
                    <div class="pressure-badge ${pressureRating.class}">
                        ${pressureRating.label}
                    </div>
                </div>
                
                <div class="player-card-content">
                    <div class="player-card-info">
                        <h3 class="player-card-name">${player.name}</h3>
                        <div class="player-card-meta">
                            <span class="player-card-role ${getRoleClass(player.role)}">${player.role}</span>
                            <span class="player-card-details">${player.country} • ${player.age} years</span>
                        </div>
                    </div>
                    
                    
                    <div class="stats-section-title">
                        <i class="fas fa-bullseye"></i>
                        Overall Batting
                    </div>
                    <div class="stats-grid">
                        <div class="stat-card general">
                            <div class="stat-value-large">${player.stats.batting.runs}</div>
                            <div class="stat-label-small">Runs</div>
                        </div>
                        <div class="stat-card general">
                            <div class="stat-value-large">${player.stats.batting.average}</div>
                            <div class="stat-label-small">Average</div>
                        </div>
                        <div class="stat-card general">
                            <div class="stat-value-large">${player.stats.batting.strikeRate}</div>
                            <div class="stat-label-small">Strike Rate</div>
                        </div>
                        <div class="stat-card general">
                            <div class="stat-value-large">${player.stats.batting.hundreds}</div>
                            <div class="stat-label-small">Hundreds</div>
                        </div>
                        <div class="stat-card general">
                            <div class="stat-value-large">${player.stats.batting.fifties}</div>
                            <div class="stat-label-small">Fifties</div>
                        </div>
                        <div class="stat-card general">
                            <div class="stat-value-large">${player.stats.batting.matches}</div>
                            <div class="stat-label-small">Matches</div>
                        </div>
                        <div class="stat-card general">
                            <div class="stat-value-large">${player.stats.batting.highestScore}</div>
                            <div class="stat-label-small">Highest Score</div>
                        </div>
                    </div>
                    
                    ${player.stats.bowling ? `
                        <div class="stats-section-title">
                            <i class="fas fa-bolt"></i>
                            Overall Bowling
                        </div>
                        <div class="stats-grid">
                            <div class="stat-card general">
                                <div class="stat-value-large">${player.stats.bowling.wickets}</div>
                                <div class="stat-label-small">Wickets</div>
                            </div>
                            <div class="stat-card general">
                                <div class="stat-value-large">${player.stats.bowling.average}</div>
                                <div class="stat-label-small">Average</div>
                            </div>
                            <div class="stat-card general">
                                <div class="stat-value-large">${player.stats.bowling.economy}</div>
                                <div class="stat-label-small">Economy</div>
                            </div>
                            <div class="stat-card general">
                                <div class="stat-value-medium">${player.stats.bowling.bestFigures}</div>
                                <div class="stat-label-small">Best Figures</div>
                            </div>
                            <div class="stat-card general">
                                <div class="stat-value-medium">${player.stats.bowling.fiveWickets}</div>
                                <div class="stat-label-small">Best Figures</div>
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="stats-section-title">
                        <i class="fas fa-shield-alt"></i>
                        Fielding
                    </div>
                    <div class="stats-grid three-col">
                        <div class="stat-card general">
                            <div class="stat-value-medium">${player.stats.fielding.catches}</div>
                            <div class="stat-label-small">Catches</div>
                        </div>
                        <div class="stat-card general">
                            <div class="stat-value-medium">${player.stats.fielding.stumpings}</div>
                            <div class="stat-label-small">Stumpings</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    updatePlayerCount() {
        document.getElementById('player-count').textContent = `${players.length} Players`;
        document.getElementById('team-count').textContent = `${teams.length} Teams`;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IPLComparison();
});