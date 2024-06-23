export const useUtils = () => {
  const generateNavLinkProps = (action) => {
    switch (action) {
      case 'feed':
        return {
          to: 'feed',
          icon: 'home',
          label: 'Inicio',
        };
        break;
      case 'market':
        return {
          to: 'market',
          icon: 'market',
          label: 'Mercado',
        };
        break;
      case 'team':
        return {
          to: 'team',
          icon: 'team',
          label: 'Equipo',
        };
        break;
      case 'standings':
        return {
          to: 'standings',
          icon: 'table',
          label: 'Tabla',
        };
        break;
      case 'more':
        return {
          to: 'more',
          icon: 'more',
          label: 'Más',
        };
        break;

      default:
        break;
    }
  };

  return {
    generateNavLinkProps,
  };
};
