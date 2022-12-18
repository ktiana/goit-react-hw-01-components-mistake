export const Statistics = ({ title, stats }) => (
  <section class="statistics">
    {title && <h2 class="title">{title}</h2>}

    <ul class="stat-list">
      {stats.map(el => (
        <li key={el.id} class="item">
          <span class="label">{el.lable}</span>
          <span class="percentage">{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
