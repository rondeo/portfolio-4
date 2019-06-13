import React from "react";
import SkillBox from "../component/skill-component";
export default class Header extends React.Component {
  render() {
    const skillHtml = {
      name:'html',
      title:'HTML5',
      skill:[
        '웹접근성',
        '시멘틱 마크업',
        'JSX'
      ],
      list:[
        '삼성 프로젝트 웹 접근성 검수 통과 경험',
        'React의 JSX 문법 학습',
        'Haml,pug,jade 기초 학습'
      ]
    },
    skillCss = {
      name:'css',
      title:'CSS',
      skill:[
        'Flex',
        'AnimateFrame',
        'Media query'
      ],
      list:[
        'CSS Media query를 이용한 반응형 경험',
        'CSS3 Transition,Animation Frame을 이용한 Motion 경험',
        'Flex를 이용한 레이아웃 배치 경험'
      ]
    },
    skillJs = {
      name:'js',
      title:'JS',
      skill:[
        'ES6',
        'React',
        'Vanilla'
      ],
      list:[
        'CSS Media query를 이용한 반응형 경험',
        'CSS3 Transition,Animation Frame을 이용한 Motion 경험',
        'Flex를 이용한 레이아웃 배치 경험'
      ]
    },
    skillEtc = {
      name:'etc',
      title:'Etc',
      skill:[
        'GIT',
        'Mac',
        'VScode'
      ],
      list:[
        'GIT - Brunch, Merge, PullRequest 경험',
        'Mac OS, Window OS 숙달',
        'VScode, Atom, Sublime 등 다양한 에디터 사용 경험',
      ]
    }
    return (
      <div className="page skill">
        <div className="skill-wrap">
          <div className="inner">
            <SkillBox boxName={skillHtml.name} title={skillHtml.title} skill={skillHtml.skill} skillList={skillHtml.list}/>
            <SkillBox boxName={skillCss.name} title={skillCss.title} skill={skillCss.skill} skillList={skillCss.list}/>
            <SkillBox boxName={skillJs.name} title={skillJs.title} skill={skillJs.skill} skillList={skillJs.list}/>
            <SkillBox boxName={skillEtc.name} title={skillEtc.title} skill={skillEtc.skill} skillList={skillEtc.list}/>
            
          </div>
        </div>
      </div>
    )
  }
}

