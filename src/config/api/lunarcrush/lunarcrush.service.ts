import { Injectable } from '@nestjs/common';
//import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import 'dotenv/config.js';
import { MetaEntity } from './entities/meta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { CreateLunarcrushDto } from './dto/create-lunarcrush.dto';
//import { UpdateLunarcrushDto } from './dto/update-lunarcrush.dto';

const headersRequest = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.API_KEY_LC}`,
};

let sumId = 0;

@Injectable()
export class LunarcrushService {
  constructor(
    private httpService: HttpService,

    @InjectRepository(MetaEntity)
    private metaRepository: Repository<MetaEntity>,
  ) {}

  async getBitcoinPrice() {
    const url = `https://lunarcrush.com/api3/coin/list`;
    const response = await lastValueFrom(
      this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .pipe(map((response) => response.data)),
    );
    return response;
  }

  async getMetaByCoin(id) {
    const url = `https://lunarcrush.com/api3/coins/${id}/meta`;
    const response = await lastValueFrom(
      this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .pipe(map((response) => response.data)),
    );
    return response;
  }

  //@Cron(CronExpression.EVERY_5_SECONDS)
  async getMet() {
    sumId++;
    const url = `https://lunarcrush.com/api3/coins/${sumId}/meta`;
    const response = await lastValueFrom(
      this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .pipe(map((response) => response.data)),
    );

    const {
      id,
      short_summary,
      description,
      features,
      technology,
      github_link,
      website_link,
      whitepaper_link,
      twitter_link,
      reddit_link,
      telegram_link,
      youtube_link,
      twitter_accounts,
      blog_link,
      whitepaper_text,
      header_image,
      header_text,
      videos,
      team,
      sections_order,
      exclude_sections,
      instagram_link,
      facebook_link,
      pinterest_link,
      linkedin_link,
      weibo_link,
      discord_link,
      gitlab_link,
      forum_link,
      overview_promotion,
      header_hide_text,
      logo_version,
      updated,
      coins_links,
    } = response.data;

    const meta = this.metaRepository.create({
      ID_META: id,
      ID_COIN: sumId,
      SUMMARY: short_summary,
      DESCRIPTION: description,
      FEATURES: features,
      TECHNOLOGY: technology,
      GITHUB_LINK: github_link,
      WEBSITE_LINK: website_link,
      WHITEPAPER_LINK: whitepaper_link,
      TWITTER_LINK: twitter_link,
      REDDIT_LINK: reddit_link,
      TELEGRAM_LINK: telegram_link,
      YOUTUBE_LINK: youtube_link,
      TWITTER_ACCOUNTS: twitter_accounts,
      BLOG_LINK: blog_link,
      WHITEPAPER_TEXT: whitepaper_text,
      HEADER_IMAGE: header_image,
      HEADER_TEXT: header_text,
      VIDEOS: videos,
      TEAM: team,
      SECTIONS_ORDER: sections_order,
      EXCLUDE_SECTIONS: exclude_sections,
      INSTAGRAM_LINK: instagram_link,
      FACEBOOK_LINK: facebook_link,
      PINTEREST_LINK: pinterest_link,
      LINKEDIN_LINK: linkedin_link,
      WEIBO_LINK: weibo_link,
      DISCORD_LINK: discord_link,
      GITLAB_LINK: gitlab_link,
      FORUM_LINK: forum_link,
      OVERVIEW_PROMOTION: overview_promotion,
      HEADER_HIDE_TEXT: header_hide_text,
      LOGO_VERSION: logo_version,
      UPDATED: updated,
      COINS_LINKS: coins_links,
    });
    await this.metaRepository.save(meta);

    return response;
  }

  /* 
 
 create(createLunarcrushDto: CreateLunarcrushDto) {
    return 'This action adds a new lunarcrush';
  }
 
 findAll() {
    return `This action returns all lunarcrush`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lunarcrush`;
  }

  update(id: number, updateLunarcrushDto: UpdateLunarcrushDto) {
    return `This action updates a #${id} lunarcrush`;
  }

  remove(id: number) {
    return `This action removes a #${id} lunarcrush`;
  } */
}
