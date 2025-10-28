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
    // Stat changes
    changeFromLastWeek: string;
    acrossPlatforms: string;
    changeThisMonth: string;
    // Descriptions
    engagementTrendSubtitle: string;
    latestUpdatesSubtitle: string;
    // Activity items
    activityNewComment: string;
    activityPostScheduled: string;
    activityEngagementIncreased: string;
    activityDmReceived: string;
    activityVideoPublished: string;
    // Quick action descriptions
    quickActionCreatePost: string;
    quickActionManageInbox: string;
    quickActionViewAnalytics: string;
    // Time formats
    minutesAgo: string;
    hourAgo: string;
    hoursAgo: string;
    dayAgo: string;
    daysAgo: string;
  };
  // Composer
  composer: {
    title: string;
    subtitle: string;
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
    subtitle: string;
    connected: string;
    notConnected: string;
    connect: string;
    disconnect: string;
    reconnect: string;
    configure: string;
    platforms: string;
    lastSync: string;
    accountsConnected: string;
    confirmDisconnect: string;
    confirmDisconnectMessage: string;
    confirmConnect: string;
    confirmConnectMessage: string;
    connecting: string;
    disconnecting: string;
    connectionSuccess: string;
    disconnectionSuccess: string;
    features: string;
    platformDescriptions: {
      facebook: string;
      instagram: string;
      twitter: string;
      linkedin: string;
      tiktok: string;
      youtube: string;
      snapchat: string;
      threads: string;
      gmb: string;
    };
    platformFeatures: {
      facebook: string[];
      instagram: string[];
      twitter: string[];
      linkedin: string[];
      tiktok: string[];
      youtube: string[];
      snapchat: string[];
      threads: string[];
      gmb: string[];
    };
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
    subtitle: string;
    profile: string;
    billing: string;
    notifications: string;
    language: string;
    security: string;
    account: string;
    plan: string;
    upgrade: string;
    saveChanges: string;
    profileInfo: string;
    profilePicture: string;
    uploadPhoto: string;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    bio: string;
    bioPlaceholder: string;
    timezone: string;
    currentPlan: string;
    professionalPlan: string;
    perMonth: string;
    nextBillingDate: string;
    changePlan: string;
    paymentMethod: string;
    cardEnding: string;
    expiresDate: string;
    updatePayment: string;
    billingHistory: string;
    invoiceDate: string;
    invoiceAmount: string;
    invoiceStatus: string;
    downloadInvoice: string;
    paid: string;
    pending: string;
    emailNotifications: string;
    pushNotifications: string;
    marketingEmails: string;
    weeklyReports: string;
    notificationPreferences: string;
    newMessages: string;
    scheduledPosts: string;
    analyticsReports: string;
    platformAlerts: string;
    selectLanguage: string;
    french: string;
    english: string;
    languageDescription: string;
    changePassword: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    updatePassword: string;
    twoFactorAuth: string;
    enable2FA: string;
    disable2FA: string;
    twoFactorDescription: string;
    activeSessions: string;
    currentSession: string;
    lastActive: string;
    revokeSession: string;
    securityLog: string;
    dangerZone: string;
    deleteAccount: string;
    deleteAccountDescription: string;
    deleteAccountConfirm: string;
    exportData: string;
    exportDataDescription: string;
    deactivateAccount: string;
    deactivateAccountDescription: string;
    settingsSaved: string;
    settingsSavedDescription: string;
    passwordUpdated: string;
    passwordUpdatedDescription: string;
    january: string;
    february: string;
    march: string;
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
      changeFromLastWeek: '+{value} from last week',
      acrossPlatforms: 'Across all platforms',
      changeThisMonth: '+{value}% this month',
      engagementTrendSubtitle: 'Your engagement trend over the past week',
      latestUpdatesSubtitle: 'Latest updates from your accounts',
      activityNewComment: 'New comment on Instagram',
      activityPostScheduled: 'Post scheduled for tomorrow',
      activityEngagementIncreased: 'LinkedIn engagement increased',
      activityDmReceived: 'Twitter DM received',
      activityVideoPublished: 'YouTube video published',
      quickActionCreatePost: 'Create and schedule posts across all platforms',
      quickActionManageInbox: 'View and respond to all messages in one place',
      quickActionViewAnalytics: 'Track performance and insights',
      minutesAgo: '{value} minutes ago',
      hourAgo: '1 hour ago',
      hoursAgo: '{value} hours ago',
      dayAgo: '1 day ago',
      daysAgo: '{value} days ago',
    },
    composer: {
      title: 'Compose Post',
      subtitle: 'Create and schedule your social media posts',
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
      subtitle: 'Connect your social media accounts',
      connected: 'Connected',
      notConnected: 'Not Connected',
      connect: 'Connect',
      disconnect: 'Disconnect',
      reconnect: 'Reconnect',
      configure: 'Configure',
      platforms: 'Platforms',
      lastSync: 'Last sync',
      accountsConnected: 'accounts connected',
      confirmDisconnect: 'Confirm Disconnection',
      confirmDisconnectMessage: 'Are you sure you want to disconnect this platform?',
      confirmConnect: 'Connect Platform',
      confirmConnectMessage: 'You will be redirected to authorize this platform.',
      connecting: 'Connecting...',
      disconnecting: 'Disconnecting...',
      connectionSuccess: 'Successfully connected!',
      disconnectionSuccess: 'Successfully disconnected',
      features: 'Features',
      platformDescriptions: {
        facebook: 'Manage your Facebook pages and groups',
        instagram: 'Share photos and stories on Instagram',
        twitter: 'Post tweets and manage your X account',
        linkedin: 'Publish professional content on LinkedIn',
        tiktok: 'Create and share viral TikTok videos',
        youtube: 'Upload and manage YouTube videos',
        snapchat: 'Share stories and engage with Snapchat audience',
        threads: 'Post updates and engage on Threads by Instagram',
        gmb: 'Manage your Google My Business listings',
      },
      platformFeatures: {
        facebook: [
          'Schedule posts to pages',
          'Respond to comments and messages',
          'Manage Facebook ads',
          'Track page analytics',
        ],
        instagram: [
          'Schedule photos and stories',
          'Auto-publish to feed',
          'Manage direct messages',
          'Track engagement metrics',
        ],
        twitter: [
          'Schedule tweets and threads',
          'Monitor mentions and replies',
          'Track trending topics',
          'Analyze tweet performance',
        ],
        linkedin: [
          'Publish to company pages',
          'Schedule professional content',
          'Engage with connections',
          'Monitor post analytics',
        ],
        tiktok: [
          'Schedule TikTok videos',
          'Track video performance',
          'Respond to comments',
          'Analyze trending sounds',
        ],
        youtube: [
          'Upload and schedule videos',
          'Manage video metadata',
          'Respond to comments',
          'Track channel analytics',
        ],
        snapchat: [
          'Schedule Snapchat stories',
          'Manage public stories',
          'Track story engagement',
          'Monitor audience insights',
        ],
        threads: [
          'Schedule Threads posts',
          'Engage with community',
          'Track post performance',
          'Monitor trending topics',
        ],
        gmb: [
          'Update business information',
          'Respond to reviews',
          'Post business updates',
          'Track location insights',
        ],
      },
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
      subtitle: 'Manage your account and preferences',
      profile: 'Profile',
      billing: 'Billing',
      notifications: 'Notifications',
      language: 'Language',
      security: 'Security',
      account: 'Account',
      plan: 'Plan',
      upgrade: 'Upgrade',
      saveChanges: 'Save Changes',
      profileInfo: 'Profile Information',
      profilePicture: 'Profile Picture',
      uploadPhoto: 'Upload Photo',
      firstName: 'First Name',
      lastName: 'Last Name',
      name: 'Name',
      email: 'Email',
      bio: 'Bio',
      bioPlaceholder: 'Tell us about yourself...',
      timezone: 'Time Zone',
      currentPlan: 'Current Plan',
      professionalPlan: 'Professional Plan',
      perMonth: '/month',
      nextBillingDate: 'Next billing date',
      changePlan: 'Change Plan',
      paymentMethod: 'Payment Method',
      cardEnding: 'Card ending in',
      expiresDate: 'Expires',
      updatePayment: 'Update',
      billingHistory: 'Billing History',
      invoiceDate: 'Date',
      invoiceAmount: 'Amount',
      invoiceStatus: 'Status',
      downloadInvoice: 'Download',
      paid: 'Paid',
      pending: 'Pending',
      emailNotifications: 'Email Notifications',
      pushNotifications: 'Push Notifications',
      marketingEmails: 'Marketing Emails',
      weeklyReports: 'Weekly Reports',
      notificationPreferences: 'Notification Preferences',
      newMessages: 'New messages',
      scheduledPosts: 'Scheduled posts',
      analyticsReports: 'Analytics reports',
      platformAlerts: 'Platform connection alerts',
      selectLanguage: 'Select Language',
      french: 'Français',
      english: 'English',
      languageDescription: 'Choose your preferred language for the interface',
      changePassword: 'Change Password',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmPassword: 'Confirm Password',
      updatePassword: 'Update Password',
      twoFactorAuth: 'Two-Factor Authentication',
      enable2FA: 'Enable 2FA',
      disable2FA: 'Disable 2FA',
      twoFactorDescription: 'Add an extra layer of security to your account',
      activeSessions: 'Active Sessions',
      currentSession: 'Current Session',
      lastActive: 'Last Active',
      revokeSession: 'Revoke',
      securityLog: 'Security Log',
      dangerZone: 'Danger Zone',
      deleteAccount: 'Delete Account',
      deleteAccountDescription: 'Permanently delete your account and all data',
      deleteAccountConfirm: 'Delete My Account',
      exportData: 'Export Data',
      exportDataDescription: 'Download all your account data',
      deactivateAccount: 'Deactivate Account',
      deactivateAccountDescription: 'Temporarily disable your account',
      settingsSaved: 'Settings Saved',
      settingsSavedDescription: 'Your settings have been updated successfully',
      passwordUpdated: 'Password Updated',
      passwordUpdatedDescription: 'Your password has been changed successfully',
      january: 'January',
      february: 'February',
      march: 'March',
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
        subtitle: 'Join thousands of professionals who trust Postify',
        items: {
          sarah: {
            name: 'Sarah Johnson',
            role: 'Social Media Manager',
            company: 'TechCorp',
            content: 'Postify has transformed how we manage our social media. The AI features save us hours every week!',
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
        copyright: '© 2025 Postify. All rights reserved.',
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
      changeFromLastWeek: '+{value} depuis la semaine dernière',
      acrossPlatforms: 'Toutes plateformes confondues',
      changeThisMonth: '+{value}% ce mois-ci',
      engagementTrendSubtitle: 'Votre tendance d\'engagement au cours de la semaine passée',
      latestUpdatesSubtitle: 'Dernières mises à jour de vos comptes',
      activityNewComment: 'Nouveau commentaire sur Instagram',
      activityPostScheduled: 'Publication programmée pour demain',
      activityEngagementIncreased: 'Engagement LinkedIn en hausse',
      activityDmReceived: 'Message direct Twitter reçu',
      activityVideoPublished: 'Vidéo YouTube publiée',
      quickActionCreatePost: 'Créer et programmer des publications sur toutes les plateformes',
      quickActionManageInbox: 'Voir et répondre à tous les messages en un seul endroit',
      quickActionViewAnalytics: 'Suivre les performances et les statistiques',
      minutesAgo: 'Il y a {value} minutes',
      hourAgo: 'Il y a 1 heure',
      hoursAgo: 'Il y a {value} heures',
      dayAgo: 'Il y a 1 jour',
      daysAgo: 'Il y a {value} jours',
    },
    composer: {
      title: 'Composer une publication',
      subtitle: 'Créer et programmer vos publications sur les réseaux sociaux',
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
      subtitle: 'Connectez vos comptes de réseaux sociaux',
      connected: 'Connecté',
      notConnected: 'Non connecté',
      connect: 'Connecter',
      disconnect: 'Déconnecter',
      reconnect: 'Reconnecter',
      configure: 'Configurer',
      platforms: 'Plateformes',
      lastSync: 'Dernière synchro',
      accountsConnected: 'comptes connectés',
      confirmDisconnect: 'Confirmer la déconnexion',
      confirmDisconnectMessage: 'Êtes-vous sûr de vouloir déconnecter cette plateforme ?',
      confirmConnect: 'Connecter la plateforme',
      confirmConnectMessage: 'Vous serez redirigé pour autoriser cette plateforme.',
      connecting: 'Connexion en cours...',
      disconnecting: 'Déconnexion en cours...',
      connectionSuccess: 'Connexion réussie !',
      disconnectionSuccess: 'Déconnexion réussie',
      features: 'Fonctionnalités',
      platformDescriptions: {
        facebook: 'Gérez vos pages et groupes Facebook',
        instagram: 'Partagez photos et stories sur Instagram',
        twitter: 'Publiez des tweets et gérez votre compte X',
        linkedin: 'Publiez du contenu professionnel sur LinkedIn',
        tiktok: 'Créez et partagez des vidéos TikTok virales',
        youtube: 'Uploadez et gérez vos vidéos YouTube',
      },
      platformFeatures: {
        facebook: [
          'Programmer des publications sur les pages',
          'Répondre aux commentaires et messages',
          'Gérer les publicités Facebook',
          'Suivre les analytiques de page',
        ],
        instagram: [
          'Programmer photos et stories',
          'Publication automatique sur le fil',
          'Gérer les messages directs',
          'Suivre les métriques d\'engagement',
        ],
        twitter: [
          'Programmer tweets et threads',
          'Surveiller mentions et réponses',
          'Suivre les sujets tendances',
          'Analyser la performance des tweets',
        ],
        linkedin: [
          'Publier sur les pages entreprise',
          'Programmer du contenu professionnel',
          'Interagir avec les connexions',
          'Suivre les analytiques des publications',
        ],
        tiktok: [
          'Programmer des vidéos TikTok',
          'Suivre la performance des vidéos',
          'Répondre aux commentaires',
          'Analyser les sons tendances',
        ],
        youtube: [
          'Uploader et programmer des vidéos',
          'Gérer les métadonnées vidéo',
          'Répondre aux commentaires',
          'Suivre les analytiques de chaîne',
        ],
      },
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
      subtitle: 'Gérez votre compte et vos préférences',
      profile: 'Profil',
      billing: 'Facturation',
      notifications: 'Notifications',
      language: 'Langue',
      security: 'Sécurité',
      account: 'Compte',
      plan: 'Forfait',
      upgrade: 'Mettre à niveau',
      saveChanges: 'Enregistrer les modifications',
      profileInfo: 'Informations du profil',
      profilePicture: 'Photo de profil',
      uploadPhoto: 'Télécharger une photo',
      firstName: 'Prénom',
      lastName: 'Nom',
      name: 'Nom',
      email: 'Email',
      bio: 'Biographie',
      bioPlaceholder: 'Parlez-nous de vous...',
      timezone: 'Fuseau horaire',
      currentPlan: 'Forfait actuel',
      professionalPlan: 'Plan Professionnel',
      perMonth: '/mois',
      nextBillingDate: 'Prochaine facturation',
      changePlan: 'Changer de forfait',
      paymentMethod: 'Moyen de paiement',
      cardEnding: 'Carte se terminant par',
      expiresDate: 'Expire le',
      updatePayment: 'Mettre à jour',
      billingHistory: 'Historique de facturation',
      invoiceDate: 'Date',
      invoiceAmount: 'Montant',
      invoiceStatus: 'Statut',
      downloadInvoice: 'Télécharger',
      paid: 'Payé',
      pending: 'En attente',
      emailNotifications: 'Notifications par email',
      pushNotifications: 'Notifications push',
      marketingEmails: 'Emails marketing',
      weeklyReports: 'Rapports hebdomadaires',
      notificationPreferences: 'Préférences de notification',
      newMessages: 'Nouveaux messages',
      scheduledPosts: 'Publications programmées',
      analyticsReports: 'Rapports analytiques',
      platformAlerts: 'Alertes de connexion aux plateformes',
      selectLanguage: 'Sélectionner la langue',
      french: 'Français',
      english: 'English',
      languageDescription: 'Choisissez votre langue préférée pour l\'interface',
      changePassword: 'Changer le mot de passe',
      currentPassword: 'Mot de passe actuel',
      newPassword: 'Nouveau mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
      updatePassword: 'Mettre à jour le mot de passe',
      twoFactorAuth: 'Authentification à deux facteurs',
      enable2FA: 'Activer 2FA',
      disable2FA: 'Désactiver 2FA',
      twoFactorDescription: 'Ajoutez une couche de sécurité supplémentaire à votre compte',
      activeSessions: 'Sessions actives',
      currentSession: 'Session actuelle',
      lastActive: 'Dernière activité',
      revokeSession: 'Révoquer',
      securityLog: 'Journal de sécurité',
      dangerZone: 'Zone de danger',
      deleteAccount: 'Supprimer le compte',
      deleteAccountDescription: 'Supprimer définitivement votre compte et toutes vos données',
      deleteAccountConfirm: 'Supprimer mon compte',
      exportData: 'Exporter les données',
      exportDataDescription: 'Télécharger toutes vos données de compte',
      deactivateAccount: 'Désactiver le compte',
      deactivateAccountDescription: 'Désactiver temporairement votre compte',
      settingsSaved: 'Paramètres enregistrés',
      settingsSavedDescription: 'Vos paramètres ont été mis à jour avec succès',
      passwordUpdated: 'Mot de passe mis à jour',
      passwordUpdatedDescription: 'Votre mot de passe a été modifié avec succès',
      january: 'Janvier',
      february: 'Février',
      march: 'Mars',
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
        subtitle: 'Rejoignez des milliers de professionnels qui font confiance à Postify',
        items: {
          sarah: {
            name: 'Sarah Johnson',
            role: 'Responsable des réseaux sociaux',
            company: 'TechCorp',
            content: 'Postify a transformé notre gestion des réseaux sociaux. Les fonctionnalités IA nous font gagner des heures chaque semaine !',
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
        copyright: '© 2025 Postify. Tous droits réservés.',
      },
    },
  },
};
