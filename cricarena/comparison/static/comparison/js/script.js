/* --------------------------------------------------
 * IPL Player Comparison + Split Radar Charts (Batting & Bowling) [Enhanced Hover v4]
 * --------------------------------------------------
 * Key improvements in this build:
 *   ✔ Enhanced hover effects with smooth transitions
 *   ✔ Detailed stat information on hover with context
 *   ✔ Improved tooltip positioning and styling
 *   ✔ Better visual feedback for data points
 *   ✔ Responsive tooltip behavior
 *   ✔ Normalized data to 0-100 scale for better visualization
 *
 *   Load order:
 *     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
 *     <script src="data.js"></script>
 *     <script src="script-radar-comparison.js" defer></script>
 * -------------------------------------------------- */

/* ---------- Config ---------- */
const RADAR_CONTAINER_ID = 'radar-chart-container';
const BATTING_CANVAS_ID  = 'batting-radar-chart';
const BOWLING_CANVAS_ID  = 'bowling-radar-chart';
const RADAR_CANVAS_HEIGHT = 400; // px
const RADAR_TOOLTIP_HIDE_ZERO = false; // show all values including zeros for better comparison

/* Small helper */
const _num = v => (v == null || v === '' || isNaN(Number(v))) ? 0 : Number(v);

/* ==================================================
 * RadarChartComparison
 * ==================================================*/
class RadarChartComparison {
  constructor(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.battingChart = null;
    this.bowlingChart = null;
    this._resizeHandler = null;
  }

  init(){
    this.renderCharts();
    this._bindResize();
  }

  updatePlayers(p1, p2){
    this.player1 = p1;
    this.player2 = p2;
    this.renderCharts();
  }

  destroy(){
    window.removeEventListener('resize', this._resizeHandler);
    if(this.battingChart){ this.battingChart.destroy(); this.battingChart = null; }
    if(this.bowlingChart){ this.bowlingChart.destroy(); this.bowlingChart = null; }
    const container = document.getElementById(RADAR_CONTAINER_ID);
    if(container) container.remove();
  }

  _bindResize(){
    this._resizeHandler = () => {
      const container = document.getElementById(RADAR_CONTAINER_ID);
      if(!container) return;
      const w = container.clientWidth;
      const battingCanvas = document.getElementById(BATTING_CANVAS_ID);
      const bowlingCanvas = document.getElementById(BOWLING_CANVAS_ID);
      if(battingCanvas){ battingCanvas.width = w; }
      if(bowlingCanvas){ bowlingCanvas.width = w; }
      if(this.battingChart){ this.battingChart.resize(); }
      if(this.bowlingChart){ this.bowlingChart.resize(); }
    };
    window.addEventListener('resize', this._resizeHandler, { passive:true });
  }

  /* ---------- Data builders with detailed context and normalization ---------- */
  getBattingData(){
    const rawData = [
      { 
        category: 'Runs', 
        [this.player1.name]: _num(this.player1.stats?.batting?.runs), 
        [this.player2.name]: _num(this.player2.stats?.batting?.runs),
        description: 'Batting average represents runs scored per dismissal',
        unit: '',
        higherIsBetter: true,
        maxValue: 8661, // Typical max for batting average
        minValue: 0
      },
      { 
        category: 'Average', 
        [this.player1.name]: _num(this.player1.stats?.batting?.average), 
        [this.player2.name]: _num(this.player2.stats?.batting?.average),
        description: 'Batting average represents runs scored per dismissal',
        unit: '',
        higherIsBetter: true,
        maxValue: 49.81, // Typical max for batting average
        minValue: 0
      },
      { 
        category: 'Strike Rate', 
        [this.player1.name]: _num(this.player1.stats?.batting?.strikeRate), 
        [this.player2.name]: _num(this.player2.stats?.batting?.strikeRate),
        description: 'Strike rate shows runs scored per 100 balls faced',
        unit: '',
        higherIsBetter: true,
        maxValue: 400, // Typical max for strike rate
        minValue: 0
      },
      { 
        category: '100s', 
        [this.player1.name]: _num(this.player1.stats?.batting?.hundreds), 
        [this.player2.name]: _num(this.player2.stats?.batting?.hundreds),
        description: 'Number of centuries (100+ runs) scored',
        unit: '',
        higherIsBetter: true,
        maxValue: 8, // Typical max for hundreds in IPL
        minValue: 0
      },
      { 
        category: '50s', 
        [this.player1.name]: _num(this.player1.stats?.batting?.fifties), 
        [this.player2.name]: _num(this.player2.stats?.batting?.fifties),
        description: 'Number of half-centuries (50-99 runs) scored',
        unit: '',
        higherIsBetter: true,
        maxValue: 63, // Typical max for fifties in IPL
        minValue: 0
      },
    ];

    // Add normalized values for chart display
    return rawData.map(stat => ({
      ...stat,
      [`${this.player1.name}_normalized`]: this._normalizeValue(stat[this.player1.name], stat.minValue, stat.maxValue),
      [`${this.player2.name}_normalized`]: this._normalizeValue(stat[this.player2.name], stat.minValue, stat.maxValue)
    }));
  }

  getBowlingData(){
    const b1 = this.player1.stats?.bowling;
    const b2 = this.player2.stats?.bowling;
    if(!b1 || !b2){ return []; }
    
    const rawData = [
      { 
        category: 'Wickets', 
        [this.player1.name]: _num(b1.wickets), 
        [this.player2.name]: _num(b2.wickets),
        description: 'Total number of wickets taken',
        unit: '',
        higherIsBetter: true,
        maxValue: 220, // Typical max for wickets in IPL
        minValue: 0
      },
      { 
        category: 'Average', 
        [this.player1.name]: _num(b1.average), 
        [this.player2.name]: _num(b2.average),
        description: 'Bowling average - runs conceded per wicket taken',
        unit: '',
        higherIsBetter: false,
        maxValue: 127, // Higher bowling average is worse
        minValue: 0
      },
      { 
        category: 'Economy', 
        [this.player1.name]: _num(b1.economy), 
        [this.player2.name]: _num(b2.economy),
        description: 'Economy rate - runs conceded per over bowled',
        unit: '',
        higherIsBetter: false,
        maxValue: 36, // Higher economy is worse
        minValue: 0
      },
      { 
        category: '5 Wickets', 
        [this.player1.name]: _num(b1.fiveWickets), 
        [this.player2.name]: _num(b2.fiveWickets),
        description: 'Number of 5-wicket hauls achieved',
        unit: '',
        higherIsBetter: true,
        maxValue: 2, // Typical max for 5-wicket hauls in IPL
        minValue: 0
      },
    ];

    // Add normalized values for chart display
    return rawData.map(stat => ({
      ...stat,
      [`${this.player1.name}_normalized`]: this._normalizeValue(stat[this.player1.name], stat.minValue, stat.maxValue, stat.higherIsBetter),
      [`${this.player2.name}_normalized`]: this._normalizeValue(stat[this.player2.name], stat.minValue, stat.maxValue, stat.higherIsBetter)
    }));
  }

  /* ---------- Normalization helper ---------- */
  _normalizeValue(value, min, max, higherIsBetter = true) {
    if (value === 0 && min === 0) return 0;
    
    // Clamp value between min and max
    const clampedValue = Math.max(min, Math.min(max, value));
    
    if (higherIsBetter) {
      // For stats where higher is better (wickets, runs, etc.)
      return ((clampedValue - min) / (max - min)) * 100;
    } else {
      // For stats where lower is better (economy, bowling average)
      // Invert the scale so lower values appear higher on radar
      return ((max - clampedValue) / (max - min)) * 100;
    }
  }

  /* ---------- Rendering ---------- */
  renderCharts(){
    // Always rebuild fresh to avoid stale DOM states when players switch.
    const existing = document.getElementById(RADAR_CONTAINER_ID);
    if(existing){
      if(this.battingChart){ this.battingChart.destroy(); this.battingChart = null; }
      if(this.bowlingChart){ this.bowlingChart.destroy(); this.bowlingChart = null; }
      existing.remove();
    }

    const container = document.createElement('div');
container.id = RADAR_CONTAINER_ID;
container.className = 'bg-gray-800 rounded-xl border border-gray-700 p-6';
container.style.display = 'none'; // start hidden; shown when Radar button clicked

     container.innerHTML = `
      <div class="radar-charts-horizontal">
        <div class="chart-column">
          <h3 class="text-xl font-semibold text-white mb-6 text-center">Batting Performance</h3>
          <div class="relative" style="height:${RADAR_CANVAS_HEIGHT}px">
            <canvas id="${BATTING_CANVAS_ID}"></canvas>
          </div>
        </div>
        <div class="chart-column">
          <h3 class="text-xl font-semibold text-white mb-6 text-center">Bowling Performance</h3>
          <div class="relative" style="height:${RADAR_CANVAS_HEIGHT}px">
            <canvas id="${BOWLING_CANVAS_ID}"></canvas>
          </div>
        </div>
      </div>
    `;
    const comparisonCard = document.querySelector('.comparison-card');
    if(comparisonCard){ comparisonCard.appendChild(container); } else {
      console.warn('[RadarChartComparison] .comparison-card not found; radar will not render');
      return;
    }

    // Defer chart creation to ensure DOM ready
    requestAnimationFrame(() => {
      if(typeof Chart === 'undefined'){
        console.error('Chart.js not loaded. Include it before script-radar-comparison.js');
        return;
      }
      this._renderSingleChart({
        canvasId: BATTING_CANVAS_ID,
        data: this.getBattingData(),
        chartKey: 'battingChart',
        title: 'Batting Performance'
      });
      this._renderSingleChart({
        canvasId: BOWLING_CANVAS_ID,
        data: this.getBowlingData(),
        chartKey: 'bowlingChart',
        title: 'Bowling Performance'
      });
    });
     this._addRadarStyles();
  }

  _addRadarStyles() {
    if (!document.head.querySelector('#radar-chart-styles')) {
      const style = document.createElement('style');
      style.id = 'radar-chart-styles';
      style.textContent = `
        .radar-charts-horizontal {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          width: 100%;
        }
        
        .chart-column {
          flex: 1;
          min-width: 350px;
        }
        
        @keyframes radarInnerGrow {
          0% {
            clip-path: circle(0% at center);
            opacity: 0;
          }
          100% {
            clip-path: circle(100% at center);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /* ---- Enhanced external tooltip with detailed stats showing original values ---- */
  _externalTooltipHandler(data, title) {
  return function(ctx) {
    const { chart, tooltip } = ctx;
    const el = chart.canvas.parentNode.querySelector('.radar-tooltip') || (() => {
      const div = document.createElement('div');
      div.className = 'radar-tooltip';
      div.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        opacity: 0;
        background: rgba(17,24,39,0.95);
        color: #fff;
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 13px;
        white-space: nowrap;
        box-shadow: 0 2px 8px rgba(0,0,0,.4);
      `;
      chart.canvas.parentNode.appendChild(div);
      return div;
    })();

    if (tooltip.opacity === 0) {
      el.style.opacity = '0';
      return;
    }

    const dp = tooltip.dataPoints && tooltip.dataPoints[0];
    if (!dp) return;

    const statData = data[dp.dataIndex];
    const dataset = chart.data.datasets[dp.datasetIndex];
    const value = statData[dataset.label];

    // Build simple tooltip content
    el.innerHTML = `
      <div style="font-weight:600;color:${dataset.borderColor};">${dataset.label}</div>
      <div style="font-size:12px;color:#ccc;">${statData.category}</div>
      <div style="font-size:14px;font-weight:bold;color:#19e68c;">${value}</div>
    `;

    const canvasRect = chart.canvas.getBoundingClientRect();
    const x = canvasRect.left + dp.element.x;
    const y = canvasRect.top + dp.element.y - 40;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.opacity = '1';
  };
}


  /* ---- Enhanced tooltip element with better styling ---- */
  _getOrCreateTooltipEl(chart) {
    let el = chart.canvas.parentNode.querySelector('.radar-tooltip');
    if (!el) {
      el = document.createElement('div');
      el.className = 'radar-tooltip';
      el.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        opacity: 0;
        background: linear-gradient(135deg, rgba(17, 24, 39, 0.98), rgba(31, 41, 55, 0.98));
        color: #fff;
        padding: 0;
        border-radius: 12px;
        font-size: 13px;
        line-height: 1.4;
        white-space: nowrap;
        box-shadow: 0 20px 40px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,0.1);
        transition: opacity 0.3s ease, transform 0.3s ease;
        backdrop-filter: blur(12px);
        border: 1px solid rgba(25, 230, 140, 0.2);
        transform: translateY(10px);
        max-width: 280px;
        min-width: 200px;
      `;
      
      chart.canvas.parentNode.appendChild(el);
      
      // Add enhanced tooltip styles
      if (!document.head.querySelector('#enhanced-radar-tooltip-styles')) {
        const style = document.createElement('style');
        style.id = 'enhanced-radar-tooltip-styles';
        // Inside _getOrCreateTooltipEl, replace the style block with:
style.textContent = `
  .radar-tooltip {
    white-space: normal !important;
  }
  
  .tooltip-header {
    background: linear-gradient(135deg, #19e68c, #0c9469);
    padding: 12px 16px;
    border-radius: 12px 12px 0 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  
  .tooltip-title {
    font-weight: 700;
    font-size: 14px;
    color: #000;
    margin-bottom: 4px;
  }
  
  .tooltip-description {
    font-size: 11px;
    color: rgba(0,0,0,0.8);
    font-weight: 500;
  }
  
  .tooltip-content {
    padding: 12px 16px;
  }
  
  .tooltip-player-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
  }
  
  .tooltip-player-info {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .tooltip-color-indicator {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    display: inline-block;
    box-shadow: 0 0 0 2px rgba(255,255,255,0.3);
  }
  
  .tooltip-player-name {
    font-weight: 600;
    color: #fff;
  }
  
  .tooltip-value {
    font-weight: 700;
    color: #19e68c;
    font-size: 14px;
  }
  
  .radar-tooltip[style*="opacity: 1"] {
    transform: translateY(0);
  }
`;
        document.head.appendChild(style);
      }
    }
    return el;
  }

  /* ---- Enhanced chart renderer with normalized data but original tooltips ---- */
  _renderSingleChart({ canvasId, data, chartKey, title }){
    const canvas = document.getElementById(canvasId);
    if(!canvas){ return; }
    const ctx = canvas.getContext('2d');

    if(this[chartKey]){ this[chartKey].destroy(); }

    // If data empty (e.g., no bowling for one player) hide wrapper & bail
    if(!data || !data.length){
      if(canvas.parentElement) canvas.parentElement.style.display='none';
      return;
    } else {
      if(canvas.parentElement) canvas.parentElement.style.display='';
    }

    const labels = data.map(d => d.category);
    // Use normalized values for chart display
    const p1Vals = data.map(d => _num(d[`${this.player1.name}_normalized`]));
    const p2Vals = data.map(d => _num(d[`${this.player2.name}_normalized`]));

    this[chartKey] = new Chart(ctx, {
      type: 'radar',
      data: {
        labels,
        datasets: [
  {
    label: this.player1.name,
      data: p1Vals,
      backgroundColor: 'rgba(16,185,129,0.15)',
      borderColor: '#10B981',
      pointBackgroundColor: '#10B981',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 3,
      pointRadius: 6,
      pointHitRadius: 15,
      pointStyle: 'circle',
      borderWidth: 3,
      tension: 0.4,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 4
  },
  {
    label: this.player2.name,
      data: p2Vals,
      backgroundColor: 'rgba(59,130,246,0.15)',
      borderColor: '#3B82F6',
      pointBackgroundColor: '#3B82F6',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 3,
      pointRadius: 6,
      pointHitRadius: 15,
      pointStyle: 'triangle',
      borderWidth: 3,
      tension: 0.4,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 4
  }
]

      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { 
          mode: 'point', 
          intersect: true,
          axis: 'xy'
        },
        hover: {
          animationDuration: 300
        },
        animation: {
          duration: 1200,
          easing: 'easeOutBack',
          onComplete: (animation) => {
            const chart = animation.chart;
            const ctx = chart.ctx;
            
            // Add pulsing animation to points
            const points = chart.getDatasetMeta(0).data.concat(chart.getDatasetMeta(1).data);
            points.forEach(point => {
              point.custom = point.custom || {};
              if (!point.custom.animationStarted) {
                point.custom.animationStarted = true;
                
                // Create pulsing effect
                const pulse = () => {
                  if (!point.custom) return;
                  
                  const now = Date.now();
                  const elapsed = now - point.custom.startTime;
                  const progress = (elapsed % 2000) / 2000;
                  const scale = 1 + 0.1 * Math.sin(progress * Math.PI * 2);
                  const alpha = 0.7 + 0.3 * Math.sin(progress * Math.PI * 2);
                  
                  point.custom.scale = scale;
                  point.custom.alpha = alpha;
                  
                  chart.draw();
                  if (point.custom.animationStarted) {
                    requestAnimationFrame(pulse);
                  }
                };
                
                point.custom.startTime = Date.now();
                pulse();
              }
            });
          },
          afterRender: (animation) => {
  const chart = animation.chart;
  const ctx = chart.ctx;
  
  // Draw animated glow effects
  const points = chart.getDatasetMeta(0).data.concat(chart.getDatasetMeta(1).data);
  points.forEach(point => {
    // Add safety checks for point coordinates
    if (point && typeof point.x === 'number' && isFinite(point.x) && 
        typeof point.y === 'number' && isFinite(point.y)) {
      
      if (point.custom) {
        const { scale = 1, alpha = 0.7 } = point.custom;
        const color = point.options.backgroundColor;
        
        // Draw glow effect
        ctx.save();
        ctx.beginPath();
        ctx.arc(point.x, point.y, 10 * scale, 0, Math.PI * 2);
        
        // Only create gradient if values are valid
        if (isFinite(point.x) && isFinite(point.y) && isFinite(10 * scale)) {
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0, 
            point.x, point.y, 10 * scale
          );
          gradient.addColorStop(0, color);
          gradient.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = gradient;
          ctx.globalAlpha = alpha * 0.5;
          ctx.fill();
        }
        ctx.restore();
      }
    }
  });
}
        },
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
            angleLines: { 
              color: 'rgba(255,255,255,0.15)',
              lineWidth: 1
            },
            grid: { 
              color: 'rgba(255,255,255,0.1)',
              lineWidth: 1
            },
            pointLabels: { 
              color: '#E5E7EB', 
              font: { 
                size: 13,
                weight: '600'
              },
              padding: 15
            },
            ticks: { 
              backdropColor: 'transparent', 
              color: '#9CA3AF', 
              showLabelBackdrop: false,
              font: {
                size: 11
              },
              stepSize: 20
            }
          }
        },
        plugins: {
          legend: { 
            labels: { 
              color: '#E5E7EB', 
              font: { 
                size: 13,
                weight: '600'
              },
              padding: 20,
              usePointStyle: true,
              pointStyle: 'circle'
            },
            position: 'bottom'
          },
          tooltip: {
            enabled: false,
            external: this._externalTooltipHandler(data),
            callbacks: {
              label: (context) => {
                const label = context.dataset.label || '';
                const value = context.raw;
                const statData = data[context.dataIndex];
                const originalValue = statData[label];
                
                return `${label}: ${originalValue}`;
              }
            }
          }
        },
        elements: { 
          line: { 
            tension: 0.4,
            borderJoinStyle: 'round'
          },
          point: {
            hoverBorderWidth: 4
          }
        },
        onHover: (event, activeElements) => {
          event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
        }
      }
    });

    // Add inner grow animation to the canvas
    setTimeout(() => {
      const canvas = document.getElementById(canvasId);
      if (canvas) {
        const wrapper = canvas.parentElement;
        wrapper.style.overflow = 'hidden';
        wrapper.style.position = 'relative';
        
        // Create a clipping container
        const clipDiv = document.createElement('div');
        clipDiv.className = 'radar-clip-container';
        clipDiv.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          animation: radarInnerGrow 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          clip-path: circle(0% at center);
        `;
        
        // Move canvas inside the clipping container
        clipDiv.appendChild(canvas);
        wrapper.appendChild(clipDiv);
      }
    }, 100);
    
    canvas.height = RADAR_CANVAS_HEIGHT;
  }
}


/* ==================================================
 * IPLComparison  (unchanged logic except radar render call)
 * ==================================================*/
class IPLComparison {
  constructor(){
    this.selectedTeam1 = null;
    this.selectedTeam2 = null;
    this.selectedPlayer1 = null;
    this.selectedPlayer2 = null;
    this.radarChart = null; // RadarChartComparison instance
    this.init();
  }

  init(){
    this.setupEventListeners();
    this.populateTeamDropdowns();
    this.updatePlayerCount();
  }

  /* ----- Dropdown wiring ----- */
  setupEventListeners(){
    document.getElementById('team1-btn').addEventListener('click', () => this.toggleDropdown('team1'));
    document.getElementById('team2-btn').addEventListener('click', () => this.toggleDropdown('team2'));
    document.getElementById('player1-btn').addEventListener('click', () => this.toggleDropdown('player1'));
    document.getElementById('player2-btn').addEventListener('click', () => this.toggleDropdown('player2'));
    document.addEventListener('click', (e) => { if(!e.target.closest('.dropdownComp')){ this.closeAllDropdowns(); } });
  }

  toggleDropdown(type){
    const dropdownComp = document.getElementById(`${type}-dropdownComp`);
    const btn = document.getElementById(`${type}-btn`);
    if(btn.classList.contains('disabled')) return;
    this.closeAllDropdowns();
    dropdownComp.classList.toggle('open');
  }

  closeAllDropdowns(){
    document.querySelectorAll('.dropdownComp').forEach(d => d.classList.remove('open'));
  }

  /* ----- Populate menus ----- */
  populateTeamDropdowns(){
    this.populateTeamMenu('team1');
    this.populateTeamMenu('team2');
  }

  populateTeamMenu(teamType){
    const menu = document.getElementById(`${teamType}-menu`);
    menu.innerHTML = '';
    teams.forEach(team => {
      const item = document.createElement('button');
      item.className = 'dropdownComp-item';
      item.innerHTML = `
        <img src="${team.logo}" alt="${team.name}" class="team-logo-img">
        <div class="item-info">
          <div class="item-name">${team.name}</div>
          <div class="item-details"><span class="item-country">${team.shortName}</span></div>
        </div>`;
      item.addEventListener('click', () => this.selectTeam(teamType, team));
      menu.appendChild(item);
    });
  }

  selectTeam(teamType, team){
    if(teamType === 'team1'){
      this.selectedTeam1 = team; this.selectedPlayer1 = null;
    } else {
      this.selectedTeam2 = team; this.selectedPlayer2 = null;
    }
    this.updateTeamButton(teamType, team);
    this.populatePlayerMenu(teamType);
    this.enablePlayerDropdown(teamType);
    this.closeAllDropdowns();
    this.updateDisplay();
  }

  updateTeamButton(teamType, team){
    const btn = document.getElementById(`${teamType}-btn`);
    const content = btn.querySelector('.dropdownComp-content');
    content.innerHTML = `
      <img src="${team.logo}" alt="${team.name}" class="team-logo-img">
      <div class="item-info">
        <div class="item-name">${team.name}</div>
        <div class="item-details"><span class="item-country">${team.shortName}</span></div>
      </div>`;
    content.classList.remove('placeholder');
  }

  enablePlayerDropdown(teamType){
    const btn = document.getElementById(`${teamType.replace('team','player')}-btn`);
    const content = btn.querySelector('.dropdownComp-content');
    btn.classList.remove('disabled');
    content.innerHTML = `<i class="fas fa-user"></i>Choose a player...`;
    content.classList.add('placeholder');
  }

  populatePlayerMenu(teamType){
    const playerType = teamType.replace('team','player');
    const menu = document.getElementById(`${playerType}-menu`);
    const teamId = teamType === 'team1' ? this.selectedTeam1.id : this.selectedTeam2.id;
    menu.innerHTML = '';

    const cancelItem = document.createElement('button');
    cancelItem.className = 'dropdownComp-item cancel-option';
    cancelItem.innerHTML = `<i class="fas fa-times-circle"></i><div class="item-info"><div class="item-name">Cancel Selection</div></div>`;
    cancelItem.addEventListener('click', () => this.cancelPlayerSelection(playerType));
    menu.appendChild(cancelItem);

    const divider = document.createElement('div');
    divider.className = 'dropdownComp-divider';
    menu.appendChild(divider);

    const teamPlayers = players.filter(p => p.team === teamId);
    teamPlayers.forEach(player => {
      const item = document.createElement('button');
      item.className = 'dropdownComp-item';
      item.innerHTML = `
        <img src="${player.photo}" class="player-photo">
        <div class="item-info">
          <div class="item-name">${player.name}</div>
          <div class="item-details"><span class="role-badge role-${player.role.toLowerCase().replace('-', '-')}">${player.role}</span></div>
        </div>`;
      item.addEventListener('click', () => this.selectPlayer(playerType, player));
      menu.appendChild(item);
    });
  }

  cancelPlayerSelection(playerType){
    const btn = document.getElementById(`${playerType}-btn`);
    const content = btn.querySelector('.dropdownComp-content');
    if(playerType === 'player1'){ this.selectedPlayer1 = null; } else { this.selectedPlayer2 = null; }
    content.innerHTML = `<i class="fas fa-user"></i>Choose a player...`;
    content.classList.add('placeholder');
    this.closeAllDropdowns();
    this.updateDisplay();
  }

  selectPlayer(playerType, player){
    if(playerType === 'player1'){ this.selectedPlayer1 = player; } else { this.selectedPlayer2 = player; }
    this.updatePlayerButton(playerType, player);
    this.closeAllDropdowns();
    this.updateDisplay();
  }

  updatePlayerButton(playerType, player){
    const btn = document.getElementById(`${playerType}-btn`);
    const content = btn.querySelector('.dropdownComp-content');
    content.innerHTML = `
      <img src="${player.photo}" class="player-photo">
      <div class="item-info">
        <div class="item-name">${player.name}</div>
        <div class="item-details"><span class="role-badge role-${player.role.toLowerCase().replace('-', '-')}">${player.role}</span></div>
      </div>`;
    content.classList.remove('placeholder');
  }

  /* ----- Display & rendering ----- */
  updateDisplay(){
  const comparisonArea = document.getElementById('comparison-area');
  const playerCards    = document.getElementById('player-cards');
  const emptyState     = document.getElementById('empty-state');

  if(this.selectedPlayer1 || this.selectedPlayer2){
    this.renderComparison();
    comparisonArea.classList.remove('hidden');
    playerCards.classList.remove('hidden');
    emptyState.classList.add('hidden');
  } else {
    comparisonArea.classList.add('hidden');
    playerCards.classList.add('hidden');
    emptyState.classList.remove('hidden');
  }

  // Radar charts should display with a placeholder if one player is missing.
  if(this.selectedPlayer1 || this.selectedPlayer2){
    const p1 = this.selectedPlayer1 || {
      name: 'No Player Selected',
      stats: { batting:{ matches:0,runs:0,average:0,strikeRate:0,fifties:0,hundreds:0 }, bowling:{} }
    };
    const p2 = this.selectedPlayer2 || {
      name: 'No Player Selected',
      stats: { batting:{ matches:0,runs:0,average:0,strikeRate:0,fifties:0,hundreds:0 }, bowling:{} }
    };
    requestAnimationFrame(() => {
      if(!this.radarChart){
        this.radarChart = new RadarChartComparison(p1, p2);
        this.radarChart.init();
      } else {
        this.radarChart.updatePlayers(p1, p2);
      }
    });
  } else if(this.radarChart){
    this.radarChart.destroy();
    this.radarChart = null;
  }
}


  /* ----- Comparison card markup ----- */
  renderComparison(){
    const comparisonArea = document.getElementById('comparison-area');
    const placeholderPlayer = {
      name:'No player chosen', role:'N/A',
      photo:'https://via.placeholder.com/150?text=Select+Player',
      stats:{
        batting:{ matches:0,runs:0,average:0,strikeRate:0,fifties:0,hundreds:0,highestScore:0 },
        bowling:{ wickets:0,average:0,economy:0,fiveWickets:0,bestFigures:'0/0' },
        fielding:{ catches:0,stumpings:0 },
        pressure:{ pressureIndex:0 }
      }
    };
    const p1 = this.selectedPlayer1 || placeholderPlayer;
    const p2 = this.selectedPlayer2 || placeholderPlayer;
    const c1 = this.selectedTeam1?.color || '#CCCCCC';
    const c2 = this.selectedTeam2?.color || '#CCCCCC';

    comparisonArea.innerHTML = `
      <div class="comparison-card">
      <div class="chart-toggle compare-toggle">
    <button id="compare-bars-btn" class="toggle-btn active"><i class="fas fa-chart-bar"></i> Bars</button>
    <button id="compare-radar-btn" class="toggle-btn"><i class="fas fa-chart-radar"></i> Radar</button>
  </div>
        <div class="comparison-header">
          <div class="comparison-players">
            <div class="player-info animate-left">
              <img src="${p1.photo}" class="player-avatar">
              <div class="player-details">
                <h3>${p1.name}</h3>
                <p>${p1.role}</p>
                ${this.selectedTeam1 ? `<div class="team-indicator"><div class="team-dot" style="background-color:${c1}"></div><span>${this.selectedTeam1.name}</span></div>`:''}
              </div>
            </div>
            <div class="vs-indicator"><div class="vs-icon"><i class="fas fa-chart-line"></i></div><div class="vs-text">VS</div></div>
            <div class="player-info animate-right">
              <div class="player-details" style="text-align:right;">
                <h3>${p2.name}</h3>
                <p>${p2.role}</p>
                ${this.selectedTeam2 ? `<div class="team-indicator" style="justify-content:flex-end;"><span>${this.selectedTeam2.name}</span><div class="team-dot" style="background-color:${c2}"></div></div>`:''}
              </div>
              <img src="${p2.photo}" class="player-avatar">
            </div>
          </div>
        </div>
        <div id="bar-comparison-wrapper" class="stats-comparison" style="display:block;">
          ${this.renderStatsSection('Overall Batting','fas fa-bullseye',[
            { label:'Matches',        value1:_num(p1.stats?.batting?.matches),        value2:_num(p2.stats?.batting?.matches) },
            { label:'Total Runs',     value1:_num(p1.stats?.batting?.runs),           value2:_num(p2.stats?.batting?.runs) },
            { label:'Batting Average',value1:_num(p1.stats?.batting?.average),        value2:_num(p2.stats?.batting?.average), format:'decimal' },
            { label:'Strike Rate',    value1:_num(p1.stats?.batting?.strikeRate),     value2:_num(p2.stats?.batting?.strikeRate), format:'decimal' },
            { label:'100s',           value1:_num(p1.stats?.batting?.hundreds),       value2:_num(p2.stats?.batting?.hundreds), format:'decimal' },
            { label:'50s',            value1:_num(p1.stats?.batting?.fifties),        value2:_num(p2.stats?.batting?.fifties), format:'decimal' },
            { label:'Highest Score',  value1:_num(p1.stats?.batting?.highestScore),   value2:_num(p2.stats?.batting?.highestScore), format:'decimal' },
          ],c1,c2)}
          ${(p1.stats?.bowling && p2.stats?.bowling) ? this.renderStatsSection('Overall Bowling','fas fa-bolt',[
            { label:'Total Wickets',  value1:_num(p1.stats.bowling.wickets),    value2:_num(p2.stats.bowling.wickets) },
            { label:'Bowling Average',value1:_num(p1.stats.bowling.average),    value2:_num(p2.stats.bowling.average), format:'decimal', isReverse:true },
            { label:'Economy Rate',   value1:_num(p1.stats.bowling.economy),    value2:_num(p2.stats.bowling.economy), format:'decimal', isReverse:true },
            { label:'5 Wickets Haul', value1:_num(p1.stats.bowling.fiveWickets),value2:_num(p2.stats.bowling.fiveWickets) },
            { label:'Best Figures',   value1:String(p1.stats.bowling.bestFigures||'0/0'), value2:String(p2.stats.bowling.bestFigures||'0/0'), format:'bestFigures' },
          ],c1,c2):''}
          ${this.renderStatsSection('Fielding Performance','fas fa-shield-alt',[
            { label:'Catches', value1:_num(p1.stats?.fielding?.catches),  value2:_num(p2.stats?.fielding?.catches) },
            { label:'Stumpings', value1:_num(p1.stats?.fielding?.stumpings), value2:_num(p2.stats?.fielding?.stumpings) },
          ],c1,c2)}
        </div>
      </div>`;

      // Wire Bars/Radar toggle
const barsBtn  = document.getElementById('compare-bars-btn');
const radarBtn = document.getElementById('compare-radar-btn');
const barsWrap = document.getElementById('bar-comparison-wrapper');
const radarWrap = document.getElementById(RADAR_CONTAINER_ID); // may not exist yet

const activateBars = () => {
  barsBtn.classList.add('active');
  radarBtn.classList.remove('active');
  if (barsWrap) barsWrap.style.display = 'block';
  const rc = document.getElementById(RADAR_CONTAINER_ID);
  if (rc) rc.style.display = 'none';
};

const activateRadar = () => {
  radarBtn.classList.add('active');
  barsBtn.classList.remove('active');
  if (barsWrap) barsWrap.style.display = 'none';
  const rc = document.getElementById(RADAR_CONTAINER_ID);
  if (rc) rc.style.display = 'block';
};

barsBtn.addEventListener('click', activateBars);
radarBtn.addEventListener('click', activateRadar);


    setTimeout(() => this.animateComparison(), 100);
    this._enhanceButtonStyles();
  }

  _enhanceButtonStyles = function() {
  const barsBtn = document.getElementById('compare-bars-btn');
  const radarBtn = document.getElementById('compare-radar-btn');
  
  if (barsBtn && radarBtn) {
    // Add hover effects
    barsBtn.addEventListener('mouseenter', () => this._addButtonHoverEffect(barsBtn));
    barsBtn.addEventListener('mouseleave', () => this._removeButtonHoverEffect(barsBtn));
    radarBtn.addEventListener('mouseenter', () => this._addButtonHoverEffect(radarBtn));
    radarBtn.addEventListener('mouseleave', () => this._removeButtonHoverEffect(radarBtn));
    
    // Add active state styles
    barsBtn.addEventListener('click', () => this._updateButtonActiveState(barsBtn, radarBtn));
    radarBtn.addEventListener('click', () => this._updateButtonActiveState(radarBtn, barsBtn));
  }
};

_addButtonHoverEffect = function(button) {
  if (!button.classList.contains('active')) {
    button.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.5)';
    button.style.transform = 'translateY(-2px)';
  }
};

_removeButtonHoverEffect = function(button) {
  if (!button.classList.contains('active')) {
    button.style.boxShadow = '';
    button.style.transform = '';
  }
};

_updateButtonActiveState = function(activeBtn, inactiveBtn) {
  activeBtn.classList.add('active');
  inactiveBtn.classList.remove('active');
  
  // Add active button glow
  activeBtn.style.boxShadow = '0 0 20px rgba(25, 230, 140, 0.7)';
  activeBtn.style.transform = 'scale(1.05)';
  
  // Remove effects from inactive button
  inactiveBtn.style.boxShadow = '';
  inactiveBtn.style.transform = '';
};

  renderStatsSection(title, icon, stats, c1, c2){
    return `
      <div class="stats-section">
        <div class="stats-title"><i class="${icon}"></i><span>${title}</span></div>
        ${stats.map((s,i)=>this.renderStatRow(s,c1,c2,i)).join('')}
      </div>`;
  }

  renderStatRow(stat, c1, c2, index){
    const { label, value1, value2, unit='', isReverse=false, format='number' } = stat;
    const v1 = _num(value1);
    const v2 = _num(value2);
    const formatValue = v => {
      if(format==='text' || format==='bestFigures') return v;
      return format==='decimal' ? _num(v).toFixed(2) : String(_num(v));
    };
    const getBetterPlayer = () => {
      if(format==='bestFigures'){
        const [w1,r1] = String(value1).split('/').map(Number);
        const [w2,r2] = String(value2).split('/').map(Number);
        if(w1>w2) return 1; if(w1<w2) return 2; if(r1<r2) return 1; if(r1>r2) return 2; return 0;
      }
      if(format==='text') return 0;
      if(v1===v2) return 0;
      return isReverse ? (v1<v2?1:2) : (v1>v2?1:2);
    };
    const better = getBetterPlayer();
    let pct1 = 50;
    if(format==='bestFigures'){
      const [w1] = String(value1).split('/').map(Number);
      const [w2] = String(value2).split('/').map(Number);
      const t = (w1||0)+(w2||0); pct1 = t>0?(w1/t)*100:50;
    } else if(isReverse && format!=='text'){
      const inv1 = v1>0?1/v1:0; const inv2 = v2>0?1/v2:0; const t=inv1+inv2; pct1 = t>0?(inv1/t)*100:50;
    } else if(format!=='text'){
      const t = v1+v2; pct1 = t>0?(v1/t)*100:50;
    }
    const pct2 = 100 - pct1;
    return `
    <div class="stat-row" data-index="${index}">
      <div class="stat-value ${better===1?'better':'worse'}">${formatValue(v1)}${unit}</div>
      <div class="stat-progress">
        <div class="stat-label">${label}</div>
        ${format==='text' || format==='bestFigures' ? `
          <div class="progress-container" style="height:auto;background:none;box-shadow:none;">
            <div style="text-align:center;padding:0.5rem;color:#6b7280;font-size:0.875rem;">vs</div>
          </div>` : `
          <div class="progress-container">
            <div class="progress-bar left ${pct1>=100?'full-left':''}" 
                 style="width:0%; background-color: ${c1}; border-radius: 12px 0 0 12px;" data-width="${Math.min(pct1,100)}"></div>
            <div class="progress-bar right ${pct2>=100?'full-right':''}" 
                 style="width:0%; background-color: ${c2}; border-radius: 0 12px 12px 0;" data-width="${Math.min(pct2,100)}"></div>
            <div class="progress-highlight"></div>
          </div>
          <div class="progress-percentages">
            <span class="progress-percent">${Math.min(pct1,100).toFixed(1)}%</span>
            <span class="progress-percent right">${Math.min(pct2,100).toFixed(1)}%</span>
          </div>`}
      </div>
      <div class="stat-value right ${better===2?'better':'worse'}">${formatValue(v2)}${unit}</div>
    </div>`;
  }

  animateComparison(){
    const statRows = document.querySelectorAll('.stat-row');
    statRows.forEach((row,i)=>{
      const delay = i*200;
      setTimeout(()=>{
        row.querySelectorAll('.stat-value').forEach(v=>v.classList.add('animate'));
        const lbl = row.querySelector('.stat-label'); if(lbl) lbl.classList.add('animate');
        setTimeout(()=>{
          const progressBars = row.querySelectorAll('.progress-bar');
          progressBars.forEach(bar=>{
            const width = bar.getAttribute('data-width');
            if (width) {
              bar.style.width = `${width}%`;
            }
          });
          const hl = row.querySelector('.progress-highlight'); if(hl) hl.classList.add('animate');
          setTimeout(()=>{ row.querySelectorAll('.progress-percent').forEach(p=>p.classList.add('animate')); },600);
        },200);
      },delay);
    });
  }

  /* ----- Player cards (single player view) ----- */
  renderPlayerCards(){
    const playerCards = document.getElementById('player-cards');
    let html='';
    if(this.selectedPlayer1 && !this.selectedPlayer2){
      html = `<div class="player-card-section"><h3 class="player-card-title"><span class="team-dot" style="background-color:${this.selectedTeam1?.color || '#3B82F6'}"></span>${this.selectedPlayer1.name}</h3>${this.renderPlayerCard(this.selectedPlayer1,this.selectedTeam1?.color)}</div>`;
    } else if(!this.selectedPlayer1 && this.selectedPlayer2){
      html = `<div class="player-card-section"><h3 class="player-card-title"><span class="team-dot" style="background-color:${this.selectedTeam2?.color || '#8B5CF6'}"></span>${this.selectedPlayer2.name}</h3>${this.renderPlayerCard(this.selectedPlayer2,this.selectedTeam2?.color)}</div>`;
    }
    playerCards.innerHTML = html;
  }

  renderPlayerCard(player,teamColor){
    const roleClass = (role)=>({ 'Batsman':'role-batsman','Bowler':'role-bowler','All-rounder':'role-all-rounder','Wicket-keeper':'role-wicket-keeper' }[role]||'role-batsman');
    const pressureRating = idx=>idx>=90?{label:'Elite',class:'pressure-elite'}:idx>=80?{label:'Excellent',class:'pressure-excellent'}:idx>=70?{label:'Good',class:'pressure-good'}:idx>=60?{label:'Average',class:'pressure-average'}:{label:'Below Par',class:'pressure-below-par'};
    const pr = pressureRating(player.stats.pressure?.pressureIndex||0);
    return `
      <div class="player-card">
        <div class="player-card-header" style="background-color:${teamColor||'#3B82F6'}">
          <img src="${player.photo}" class="player-card-avatar">
          <div class="pressure-badge ${pr.class}">${pr.label}</div>
        </div>
        <div class="player-card-content">
          <div class="player-card-info">
            <h3 class="player-card-name">${player.name}</h3>
            <div class="player-card-meta"><span class="player-card-role ${roleClass(player.role)}">${player.role}</span><span class="player-card-details">${player.age} years</span></div>
          </div>
          <div class="stats-section-title"><i class="fas fa-bullseye"></i>Overall Batting</div>
          <div class="stats-grid">
            <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.batting.runs)}</div><div class="stat-label-small">Runs</div></div>
            <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.batting.average)}</div><div class="stat-label-small">Average</div></div>
            <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.batting.strikeRate)}</div><div class="stat-label-small">Strike Rate</div></div>
            <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.batting.hundreds)}</div><div class="stat-label-small">Hundreds</div></div>
            <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.batting.fifties)}</div><div class="stat-label-small">Fifties</div></div>
            <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.batting.matches)}</div><div class="stat-label-small">Matches</div></div>
            <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.batting.highestScore)}</div><div class="stat-label-small">Highest Score</div></div>
          </div>
          ${player.stats.bowling?`
            <div class="stats-section-title"><i class="fas fa-bolt"></i>Overall Bowling</div>
            <div class="stats-grid">
              <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.bowling.wickets)}</div><div class="stat-label-small">Wickets</div></div>
              <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.bowling.average)}</div><div class="stat-label-small">Average</div></div>
              <div class="stat-card general"><div class="stat-value-large">${_num(player.stats.bowling.economy)}</div><div class="stat-label-small">Economy</div></div>
              <div class="stat-card general"><div class="stat-value-medium">${player.stats.bowling.bestFigures||'0/0'}</div><div class="stat-label-small">Best Figures</div></div>
              <div class="stat-card general"><div class="stat-value-medium">${_num(player.stats.bowling.fiveWickets)}</div><div class="stat-label-small">5W</div></div>
            </div>`:''}
          <div class="stats-section-title"><i class="fas fa-shield-alt"></i>Fielding</div>
          <div class="stats-grid three-col">
            <div class="stat-card general"><div class="stat-value-medium">${_num(player.stats.fielding.catches)}</div><div class="stat-label-small">Catches</div></div>
            <div class="stat-card general"><div class="stat-value-medium">${_num(player.stats.fielding.stumpings)}</div><div class="stat-label-small">Stumpings</div></div>
          </div>
        </div>
      </div>`;
  }

  /* ----- Counts ----- */
  updatePlayerCount(){
    document.getElementById('player-count').textContent = `${players.length} Players`;
    document.getElementById('team-count').textContent   = `${teams.length} Teams`;
  }
}

/* ==================================================
 * Boot
 * ==================================================*/


// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IPLComparison();
const toggleBtn = document.querySelector(".nav-toggle-btn");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const iplToggle = document.querySelector(".hamburger-ipl-toggle");
const iplDropdown = document.querySelector(".hamburger .dropdown-menu");
const arrow = document.querySelector(".dropdown-arrow");
const profarrow=document.querySelector(".dropdown-arrow-profile");

toggleBtn?.addEventListener("click", () => {
  hamburger?.classList.add("open");
  document.body.style.overflow = 'hidden';
});

closeBtn?.addEventListener("click", () => {
  hamburger?.classList.remove("open");
  document.body.style.overflow = 'auto';
});

iplToggle?.addEventListener("click", () => {
  iplDropdown?.classList.toggle("open");
  arrow?.classList.toggle("rotate");
});

// Profile dropdown toggle
const profileToggle = document.getElementById("profileDropdownToggle");
const profileDropdown = document.getElementById("profileDropdown");

profileToggle?.addEventListener("click", () => {
  profarrow?.classList.toggle("rotate");
  if (profileDropdown.style.display === "none") {
    profileDropdown.style.display = "flex";
  } else {
    profileDropdown.style.display = "none";
  }
});

  const userAvatar = document.getElementById("userAvatar");
const userDropdown = document.getElementById("userDropdown");

if (userAvatar && userDropdown) {
  userAvatar.addEventListener("click", () => {
    userDropdown.style.display = userDropdown.style.display === "block" ? "none" : "block";
  });

  // Optional: hide when clicking outside
  document.addEventListener("click", (e) => {
    if (!userAvatar.contains(e.target) && !userDropdown.contains(e.target)) {
      userDropdown.style.display = "none";
    }
  });
}
   const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Smooth scroll to top
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});