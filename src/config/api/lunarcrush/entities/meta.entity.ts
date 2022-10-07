import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity('META')
export class MetaEntity {
  @PrimaryColumn({ type: 'int' })
  ID_META: number;

  @Column({ type: 'int' })
  ID_COIN: number;

  @Column({ type: 'varchar', length: 45, nullable: true })
  SUMMARY: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  DESCRIPTION: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  FEATURES: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  TECHNOLOGY: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  GITHUB_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  WEBSITE_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  WHITEPAPER_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  TWITTER_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  REDDIT_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  TELEGRAM_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  YOUTUBE_LINK: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  TWITTER_ACCOUNTS: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  BLOG_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  WHITEPAPER_TEXT: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  HEADER_IMAGE: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  HEADER_TEXT: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  VIDEOS: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  TEAM: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  SECTIONS_ORDER: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  EXCLUDE_SECTIONS: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  INSTAGRAM_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  FACEBOOK_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  PINTEREST_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  LINKEDIN_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  WEIBO_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  DISCORD_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  GITLAB_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  FORUM_LINK: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  OVERVIEW_PROMOTION: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  HEADER_HIDE_TEXT: string;

  @Column({ type: 'int', nullable: true })
  LOGO_VERSION: number;

  @Column({ type: 'int', nullable: true })
  UPDATED: number;

  @Column({ type: 'varchar', length: 45, nullable: true })
  COINS_LINKS: string;
}
