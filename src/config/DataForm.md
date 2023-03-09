## API 데이터 형식

---

### TeamController [팀]

#### GET api/teams (팀 목록)

```json
[
    {
        "name": "도시ENG",
        "imageUrl": null,
        "memo": "시스템에 의해 자동 생성된 팀",
        "id": 1,
        "createdAt": 1676468162152,
        "updatedAt": 1676468162152
    }
]
```

#### GET api/teams/:team_id (팀 목록)

```json
{
    "name": "도시ENG",
    "imageUrl": null,
    "memo": "시스템에 의해 자동 생성된 팀",
    "id": 1,
    "createdAt": 1676468162152,
    "updatedAt": 1676468162152
}
```

### TeamAttrController [속성]

#### POST api/teams/:team_id/attr (속성 생성)

```json
{
    "index": 0,
    "type": "STRING",
    "name": "속성A"
}
```

#### GET api/teams/:team_id/attrs (팀 속성 목록)

```json
[
    {
        "index": 0,
        "type": "STRING",
        "name": "속성 A",
        "id": 1,
        "createdAt": 1676885594040,
        "updatedAt": 1676885594040
    },
    {
        "index": 0,
        "type": "STRING",
        "name": "속성 B",
        "id": 5,
        "createdAt": 1677221181218,
        "updatedAt": 1677221181218
    },
    {
        "index": 0,
        "type": "STRING",
        "name": "속성 C",
        "id": 6,
        "createdAt": 1677228853102,
        "updatedAt": 1677228853102
    }
]
```

#### GET api/teams/attrs/:attr_id (속성 상세)

```json
{
    "index": 0,
    "type": "STRING",
    "name": "속성 B",
    "id": 5,
    "createdAt": 1677221181218,
    "updatedAt": 1677221181218
}
```

#### GET api/teams/attrs/:attr_id/values (속성 값)

```json
[
    "속성값B"
]
```

### TeamPlaceController [위치]

#### POST api/teams/:team_id/place (위치 생성)

```json
{
    "name": "",
    "memo": "",
}
```

#### GET api/teams/:team_id/places (위치 목록)

```json
[
    {
        "name": "매장",
        "memo": "",
        "id": 1,
        "createdAt": 1676779627180,
        "updatedAt": 1676779627180
    },
    {
        "name": "창고",
        "memo": "",
        "id": 2,
        "createdAt": 1676791288736,
        "updatedAt": 1676791288736
    }
]
```

#### GET api/teams/places/:place_id (위치 상세)

```json
{
    "name": "매장",
    "memo": "",
    "id": 1,
    "createdAt": 1676779627180,
    "updatedAt": 1676779627180
}
```

### TeamProductController [제품]

#### POST api/teams/:team_id/product(제품 생성)

```json
{
    "name": name,
    "barcode": barcode,
    "places": [
        {
          "id": place.id,
          "quantity": place.quantity
        }
      ],
      "attributes": [
          {
              "id": attribute.id
              "value": attribute.value
          }
      ]
}
```

#### GET api/teams/:team_id/products/page (제품 목록)

파라미터 value (이름,바코드,속성)

```json
"content": [
        {
            "name": "제품A",
            "barcode": "00000000",
            "imageUrl": null,
            "places": [
                {
                    "id": 1,
                    "quantity": 1,
                    "name": "위치A"
                }
            ],
            "attributes": [
                {
                    "id": 1,
                    "value": "속성값A",
                    "name": "속성A"
                }
            ],
            "id": 1,
            "createdAt": 1677213742382,
            "updatedAt": 1677213742382
        }
    ]
```

#### GET api/teams/products/:product_id (제품 상세)

```json
{
    "name": "제품A",
    "barcode": "0000",
    "imageUrl": null,
    "places": [
        {
            "id": 1,
            "quantity": 1
        }
    ],
    "attributes": [
        {
            "id": 1,
            "value": "속성값A"
        }
    ],
    "id": 1,
    "createdAt": 1677213742382,
    "updatedAt": 1677213742382
}
```

### TeamPendingController [행동]

#### POST api/teams/:team_id/pending 

```json
{
    "name": "제품A",
    "barcode": "0000",
    "imageUrl": null,
    "places": [
        {
            "id": 1,
            "quantity": 1
        }
    ],
    "attributes": [
        {
            "id": 1,
            "value": "속성값A"
        }
    ],
    "id": 1,
    "createdAt": 1677213742382,
    "updatedAt": 1677213742382
}
```

위치 아이디
펜딩 타입
제품 List
    팀 아이디
날짜 UTC Time
메모