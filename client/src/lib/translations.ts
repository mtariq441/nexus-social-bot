export type Language = 'en' | 'fr';

export interface Translations {
  // Navigation
  nav: {
    dashboard: string;
    composer: string;
    inbox: string;
    analytics: string;
    integrations: string;
    team: string;
    subscription: string;
    settings: string;
    admin: string;
    logout: string;
  };
  // Dashboard
  dashboard: {
    title: string;
    welcome: string;
    scheduledPosts: string;
    pendingMessages: string;
    totalFollowers: string;
    engagementRate: string;
    weeklyEngagement: string;
    recentActivity: string;
    quickActions: string;
    composePost: string;
    manageInbox: string;
    viewAnalytics: string;
  };
  // Composer
  composer: {
    title: string;
    createPost: string;
    postContent: string;
    placeholderPost: string;
    selectPlatforms: string;
    schedulePost: string;
    publishNow: string;
    saveDraft: string;
    aiAssistant: string;
    generateCaption: string;
    suggestHashtags: string;
    optimizePost: string;
  };
  // Inbox
  inbox: {
    title: string;
    allMessages: string;
    unread: string;
    important: string;
    replied: string;
    filterByPlatform: string;
    searchMessages: string;
    quickReply: string;
    markAsRead: string;
    markAsImportant: string;
  };
  // Analytics
  analytics: {
    title: string;
    overview: string;
    engagement: string;
    followers: string;
    reach: string;
    clicks: string;
    engagementByPlatform: string;
    followerGrowth: string;
    topPerformingPosts: string;
    bestPostingTime: string;
    contentPerformance: string;
  };
  // Integrations
  integrations: {
    title: string;
    connected: string;
    notConnected: string;
    connect: string;
    disconnect: string;
    reconnect: string;
    configure: string;
    platforms: string;
  };
  // Team
  team: {
    title: string;
    members: string;
    inviteMember: string;
    role: string;
    admin: string;
    editor: string;
    analyst: string;
    viewer: string;
    lastActive: string;
    remove: string;
  };
  // Settings
  settings: {
    title: string;
    profile: string;
    billing: string;
    notifications: string;
    language: string;
    security: string;
    account: string;
    plan: string;
    upgrade: string;
    saveChanges: string;
  };
  // Common
  common: {
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    search: string;
    filter: string;
    loading: string;
    noResults: string;
    error: string;
    success: string;
    confirm: string;
    back: string;
    next: string;
    previous: string;
    viewAll: string;
    close: string;
  };
  // Landing
  landing: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      cta: string;
      watchDemo: string;
      stats: {
        platforms: string;
        users: string;
        uptime: string;
      };
    };
    features: {
      title: string;
      subtitle: string;
      cards: {
        scheduler: {
          title: string;
          description: string;
        };
        inbox: {
          title: string;
          description: string;
        };
        automation: {
          title: string;
          description: string;
        };
        analytics: {
          title: string;
          description: string;
        };
        collaboration: {
          title: string;
          description: string;
        };
        multiPlatform: {
          title: string;
          description: string;
        };
      };
    };
    pricing: {
      title: string;
      subtitle: string;
      mostPopular: string;
      startFreeTrial: string;
      perMonth: string;
      plans: {
        starter: {
          name: string;
          description: string;
          features: string[];
        };
        professional: {
          name: string;
          description: string;
          features: string[];
        };
        enterprise: {
          name: string;
          description: string;
          features: string[];
        };
      };
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: {
        sarah: {
          name: string;
          role: string;
          company: string;
          content: string;
        };
        michael: {
          name: string;
          role: string;
          company: string;
          content: string;
        };
        emily: {
          name: string;
          role: string;
          company: string;
          content: string;
        };
      };
    };
    navbar: {
      features: string;
      pricing: string;
      testimonials: string;
      login: string;
      signup: string;
    };
    footer: {
      tagline: string;
      product: string;
      company: string;
      legal: string;
      about: string;
      blog: string;
      careers: string;
      privacy: string;
      terms: string;
      contact: string;
      copyright: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      dashboard: 'Dashboard',
      composer: 'Composer',
      inbox: 'Inbox',
      analytics: 'Analytics',
      integrations: 'Integrations',
      team: 'Team',
      subscription: 'Subscription',
      settings: 'Settings',
      admin: 'Admin',
      logout: 'Logout',
    },
    dashboard: {
      title: 'Dashboard',
      welcome: 'Welcome back! Here\'s your overview.',
      scheduledPosts: 'Scheduled Posts',
      pendingMessages: 'Pending Messages',
      totalFollowers: 'Total Followers',
      engagementRate: 'Engagement Rate',
      weeklyEngagement: 'Weekly Engagement',
      recentActivity: 'Recent Activity',
      quickActions: 'Quick Actions',
      composePost: 'Compose Post',
      manageInbox: 'Manage Inbox',
      viewAnalytics: 'View Analytics',
    },
    composer: {
      title: 'Compose Post',
      createPost: 'Create New Post',
      postContent: 'Post Content',
      placeholderPost: 'What would you like to share?',
      selectPlatforms: 'Select Platforms',
      schedulePost: 'Schedule Post',
      publishNow: 'Publish Now',
      saveDraft: 'Save as Draft',
      aiAssistant: 'AI Assistant',
      generateCaption: 'Generate Caption',
      suggestHashtags: 'Suggest Hashtags',
      optimizePost: 'Optimize Post',
    },
    inbox: {
      title: 'Inbox',
      allMessages: 'All Messages',
      unread: 'Unread',
      important: 'Important',
      replied: 'Replied',
      filterByPlatform: 'Filter by Platform',
      searchMessages: 'Search messages...',
      quickReply: 'Quick Reply',
      markAsRead: 'Mark as Read',
      markAsImportant: 'Mark as Important',
    },
    analytics: {
      title: 'Analytics',
      overview: 'Overview',
      engagement: 'Engagement',
      followers: 'Followers',
      reach: 'Reach',
      clicks: 'Clicks',
      engagementByPlatform: 'Engagement by Platform',
      followerGrowth: 'Follower Growth',
      topPerformingPosts: 'Top Performing Posts',
      bestPostingTime: 'Best Posting Time',
      contentPerformance: 'Content Performance',
    },
    integrations: {
      title: 'Integrations',
      connected: 'Connected',
      notConnected: 'Not Connected',
      connect: 'Connect',
      disconnect: 'Disconnect',
      reconnect: 'Reconnect',
      configure: 'Configure',
      platforms: 'Platforms',
    },
    team: {
      title: 'Team',
      members: 'Team Members',
      inviteMember: 'Invite Member',
      role: 'Role',
      admin: 'Admin',
      editor: 'Editor',
      analyst: 'Analyst',
      viewer: 'Viewer',
      lastActive: 'Last Active',
      remove: 'Remove',
    },
    settings: {
      title: 'Settings',
      profile: 'Profile',
      billing: 'Billing',
      notifications: 'Notifications',
      language: 'Language',
      security: 'Security',
      account: 'Account',
      plan: 'Plan',
      upgrade: 'Upgrade',
      saveChanges: 'Save Changes',
    },
    common: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      search: 'Search',
      filter: 'Filter',
      loading: 'Loading...',
      noResults: 'No results found',
      error: 'Error',
      success: 'Success',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      viewAll: 'View All',
      close: 'Close',
    },
    landing: {
      hero: {
        badge: 'AI-Powered Social Media Management',
        title: 'Manage All Your Social Media in One Place',
        subtitle: 'Schedule posts, respond to messages, track analytics, and automate engagement across all platforms with AI-powered tools.',
        cta: 'Start Free Trial',
        watchDemo: 'Watch Demo',
        stats: {
          platforms: 'Platforms',
          users: 'Active Users',
          uptime: 'Uptime',
        },
      },
      features: {
        title: 'Everything You Need to Succeed',
        subtitle: 'Powerful features designed to streamline your social media management workflow',
        cards: {
          scheduler: {
            title: 'Smart Scheduler',
            description: 'Schedule posts across all platforms with optimal timing recommendations powered by AI.',
          },
          inbox: {
            title: 'Unified Inbox',
            description: 'Manage DMs, comments, and reviews from all platforms in one central location.',
          },
          automation: {
            title: 'AI Automation',
            description: 'Automate responses, generate captions, and handle routine tasks with AI.',
          },
          analytics: {
            title: 'Advanced Analytics',
            description: 'Track performance metrics, engagement rates, and growth across all channels.',
          },
          collaboration: {
            title: 'Team Collaboration',
            description: 'Work together with your team, assign tasks, and manage permissions easily.',
          },
          multiPlatform: {
            title: 'Multi-Platform Support',
            description: 'Connect Instagram, Facebook, Twitter, LinkedIn, and Google My Business.',
          },
        },
      },
      pricing: {
        title: 'Simple, Transparent Pricing',
        subtitle: 'Choose the perfect plan for your needs. All plans include a 14-day free trial.',
        mostPopular: 'Most Popular',
        startFreeTrial: 'Start Free Trial',
        perMonth: '/month',
        plans: {
          starter: {
            name: 'Starter',
            description: 'Perfect for individuals and small teams',
            features: [
              '3 social accounts',
              '30 scheduled posts/month',
              'Basic analytics',
              'Email support',
              'AI caption suggestions',
            ],
          },
          professional: {
            name: 'Professional',
            description: 'For growing businesses',
            features: [
              '10 social accounts',
              'Unlimited scheduled posts',
              'Advanced analytics',
              'Priority support',
              'AI automation',
              'Team collaboration (5 users)',
              'Custom reports',
            ],
          },
          enterprise: {
            name: 'Enterprise',
            description: 'For large organizations',
            features: [
              'Unlimited social accounts',
              'Unlimited scheduled posts',
              'Enterprise analytics',
              '24/7 dedicated support',
              'Full AI automation suite',
              'Unlimited team members',
              'White-label options',
              'API access',
            ],
          },
        },
      },
      testimonials: {
        title: 'Loved by Teams Worldwide',
        subtitle: 'Join thousands of professionals who trust SocialSync',
        items: {
          sarah: {
            name: 'Sarah Johnson',
            role: 'Social Media Manager',
            company: 'TechCorp',
            content: 'SocialSync has transformed how we manage our social media. The AI features save us hours every week!',
          },
          michael: {
            name: 'Michael Chen',
            role: 'Marketing Director',
            company: 'GrowthHub',
            content: 'The unified inbox is a game-changer. We never miss a message or comment across any platform.',
          },
          emily: {
            name: 'Emily Rodriguez',
            role: 'Founder',
            company: 'CreativeStudio',
            content: 'Best investment for our agency. The analytics and scheduling features are incredibly powerful.',
          },
        },
      },
      navbar: {
        features: 'Features',
        pricing: 'Pricing',
        testimonials: 'Testimonials',
        login: 'Login',
        signup: 'Start Free Trial',
      },
      footer: {
        tagline: 'The all-in-one platform for social media management.',
        product: 'Product',
        company: 'Company',
        legal: 'Legal',
        about: 'About',
        blog: 'Blog',
        careers: 'Careers',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
        copyright: '© 2025 SocialSync. All rights reserved.',
      },
    },
  },
  fr: {
    nav: {
      dashboard: 'Tableau de bord',
      composer: 'Composer',
      inbox: 'Boîte de réception',
      analytics: 'Analytiques',
      integrations: 'Intégrations',
      team: 'Équipe',
      subscription: 'Abonnement',
      settings: 'Paramètres',
      admin: 'Administration',
      logout: 'Déconnexion',
    },
    dashboard: {
      title: 'Tableau de bord',
      welcome: 'Bienvenue ! Voici votre aperçu.',
      scheduledPosts: 'Publications programmées',
      pendingMessages: 'Messages en attente',
      totalFollowers: 'Abonnés totaux',
      engagementRate: 'Taux d\'engagement',
      weeklyEngagement: 'Engagement hebdomadaire',
      recentActivity: 'Activité récente',
      quickActions: 'Actions rapides',
      composePost: 'Composer une publication',
      manageInbox: 'Gérer la boîte de réception',
      viewAnalytics: 'Voir les analytiques',
    },
    composer: {
      title: 'Composer une publication',
      createPost: 'Créer une nouvelle publication',
      postContent: 'Contenu de la publication',
      placeholderPost: 'Que souhaitez-vous partager ?',
      selectPlatforms: 'Sélectionner les plateformes',
      schedulePost: 'Programmer la publication',
      publishNow: 'Publier maintenant',
      saveDraft: 'Enregistrer comme brouillon',
      aiAssistant: 'Assistant IA',
      generateCaption: 'Générer une légende',
      suggestHashtags: 'Suggérer des hashtags',
      optimizePost: 'Optimiser la publication',
    },
    inbox: {
      title: 'Boîte de réception',
      allMessages: 'Tous les messages',
      unread: 'Non lus',
      important: 'Importants',
      replied: 'Répondus',
      filterByPlatform: 'Filtrer par plateforme',
      searchMessages: 'Rechercher des messages...',
      quickReply: 'Réponse rapide',
      markAsRead: 'Marquer comme lu',
      markAsImportant: 'Marquer comme important',
    },
    analytics: {
      title: 'Analytiques',
      overview: 'Vue d\'ensemble',
      engagement: 'Engagement',
      followers: 'Abonnés',
      reach: 'Portée',
      clicks: 'Clics',
      engagementByPlatform: 'Engagement par plateforme',
      followerGrowth: 'Croissance des abonnés',
      topPerformingPosts: 'Publications les plus performantes',
      bestPostingTime: 'Meilleur moment pour publier',
      contentPerformance: 'Performance du contenu',
    },
    integrations: {
      title: 'Intégrations',
      connected: 'Connecté',
      notConnected: 'Non connecté',
      connect: 'Connecter',
      disconnect: 'Déconnecter',
      reconnect: 'Reconnecter',
      configure: 'Configurer',
      platforms: 'Plateformes',
    },
    team: {
      title: 'Équipe',
      members: 'Membres de l\'équipe',
      inviteMember: 'Inviter un membre',
      role: 'Rôle',
      admin: 'Administrateur',
      editor: 'Éditeur',
      analyst: 'Analyste',
      viewer: 'Lecteur',
      lastActive: 'Dernière activité',
      remove: 'Retirer',
    },
    settings: {
      title: 'Paramètres',
      profile: 'Profil',
      billing: 'Facturation',
      notifications: 'Notifications',
      language: 'Langue',
      security: 'Sécurité',
      account: 'Compte',
      plan: 'Forfait',
      upgrade: 'Mettre à niveau',
      saveChanges: 'Enregistrer les modifications',
    },
    common: {
      save: 'Enregistrer',
      cancel: 'Annuler',
      delete: 'Supprimer',
      edit: 'Modifier',
      search: 'Rechercher',
      filter: 'Filtrer',
      loading: 'Chargement...',
      noResults: 'Aucun résultat trouvé',
      error: 'Erreur',
      success: 'Succès',
      confirm: 'Confirmer',
      back: 'Retour',
      next: 'Suivant',
      previous: 'Précédent',
      viewAll: 'Voir tout',
      close: 'Fermer',
    },
    landing: {
      hero: {
        badge: 'Gestion des réseaux sociaux propulsée par l\'IA',
        title: 'Gérez tous vos réseaux sociaux en un seul endroit',
        subtitle: 'Programmez des publications, répondez aux messages, suivez les analytiques et automatisez l\'engagement sur toutes les plateformes avec des outils propulsés par l\'IA.',
        cta: 'Commencer l\'essai gratuit',
        watchDemo: 'Voir la démo',
        stats: {
          platforms: 'Plateformes',
          users: 'Utilisateurs actifs',
          uptime: 'Disponibilité',
        },
      },
      features: {
        title: 'Tout ce dont vous avez besoin pour réussir',
        subtitle: 'Des fonctionnalités puissantes conçues pour simplifier la gestion de vos réseaux sociaux',
        cards: {
          scheduler: {
            title: 'Planificateur intelligent',
            description: 'Programmez des publications sur toutes les plateformes avec des recommandations de timing optimales propulsées par l\'IA.',
          },
          inbox: {
            title: 'Boîte de réception unifiée',
            description: 'Gérez les DM, commentaires et avis de toutes les plateformes depuis un seul endroit central.',
          },
          automation: {
            title: 'Automatisation IA',
            description: 'Automatisez les réponses, générez des légendes et gérez les tâches routinières avec l\'IA.',
          },
          analytics: {
            title: 'Analytiques avancées',
            description: 'Suivez les métriques de performance, les taux d\'engagement et la croissance sur tous les canaux.',
          },
          collaboration: {
            title: 'Collaboration d\'équipe',
            description: 'Travaillez ensemble avec votre équipe, assignez des tâches et gérez les permissions facilement.',
          },
          multiPlatform: {
            title: 'Support multi-plateformes',
            description: 'Connectez Instagram, Facebook, Twitter, LinkedIn et Google My Business.',
          },
        },
      },
      pricing: {
        title: 'Tarification simple et transparente',
        subtitle: 'Choisissez le forfait parfait pour vos besoins. Tous les forfaits incluent un essai gratuit de 14 jours.',
        mostPopular: 'Le plus populaire',
        startFreeTrial: 'Commencer l\'essai gratuit',
        perMonth: '/mois',
        plans: {
          starter: {
            name: 'Démarrage',
            description: 'Parfait pour les particuliers et petites équipes',
            features: [
              '3 comptes sociaux',
              '30 publications programmées/mois',
              'Analytiques de base',
              'Support par email',
              'Suggestions de légendes IA',
            ],
          },
          professional: {
            name: 'Professionnel',
            description: 'Pour les entreprises en croissance',
            features: [
              '10 comptes sociaux',
              'Publications programmées illimitées',
              'Analytiques avancées',
              'Support prioritaire',
              'Automatisation IA',
              'Collaboration d\'équipe (5 utilisateurs)',
              'Rapports personnalisés',
            ],
          },
          enterprise: {
            name: 'Entreprise',
            description: 'Pour les grandes organisations',
            features: [
              'Comptes sociaux illimités',
              'Publications programmées illimitées',
              'Analytiques d\'entreprise',
              'Support dédié 24/7',
              'Suite d\'automatisation IA complète',
              'Membres d\'équipe illimités',
              'Options marque blanche',
              'Accès API',
            ],
          },
        },
      },
      testimonials: {
        title: 'Apprécié par les équipes du monde entier',
        subtitle: 'Rejoignez des milliers de professionnels qui font confiance à SocialSync',
        items: {
          sarah: {
            name: 'Sarah Johnson',
            role: 'Responsable des réseaux sociaux',
            company: 'TechCorp',
            content: 'SocialSync a transformé notre gestion des réseaux sociaux. Les fonctionnalités IA nous font gagner des heures chaque semaine !',
          },
          michael: {
            name: 'Michael Chen',
            role: 'Directeur marketing',
            company: 'GrowthHub',
            content: 'La boîte de réception unifiée change la donne. Nous ne manquons jamais un message ou commentaire sur aucune plateforme.',
          },
          emily: {
            name: 'Emily Rodriguez',
            role: 'Fondatrice',
            company: 'CreativeStudio',
            content: 'Meilleur investissement pour notre agence. Les fonctionnalités d\'analytiques et de planification sont incroyablement puissantes.',
          },
        },
      },
      navbar: {
        features: 'Fonctionnalités',
        pricing: 'Tarifs',
        testimonials: 'Témoignages',
        login: 'Connexion',
        signup: 'Commencer l\'essai gratuit',
      },
      footer: {
        tagline: 'La plateforme tout-en-un pour la gestion des réseaux sociaux.',
        product: 'Produit',
        company: 'Entreprise',
        legal: 'Légal',
        about: 'À propos',
        blog: 'Blog',
        careers: 'Carrières',
        privacy: 'Politique de confidentialité',
        terms: 'Conditions d\'utilisation',
        contact: 'Contact',
        copyright: '© 2025 SocialSync. Tous droits réservés.',
      },
    },
  },
};
